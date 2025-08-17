{
  # A helpful description of your flake
  description = "flake to do dsa in js";

  # Flake inputs
  inputs = {
    flake-schemas.url = "https://flakehub.com/f/DeterminateSystems/flake-schemas/*";

    nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.2411.*";
  };

  # Flake outputs that other flakes can use
  outputs = { self, flake-schemas, nixpkgs }:
    let
      # Helpers for producing system-specific outputs
      supportedSystems = [ "x86_64-linux" "aarch64-darwin" ];
      forEachSupportedSystem = f: nixpkgs.lib.genAttrs supportedSystems (system: f {
        pkgs = import nixpkgs { inherit system; };
      });
    in {
      # Schemas tell Nix about the structure of your flake's outputs
      schemas = flake-schemas.schemas;

      # Development environments
      devShells = forEachSupportedSystem ({ pkgs }: {
        default = pkgs.mkShell {
          # Pinned packages available in the environment
          packages = with pkgs; [
            nodejs_22
            curl
            git
            jq
            wget
            bash-completion
          ];

          # A hook run every time you enter the environment
          shellHook = ''
            "hanji , Welcome to Javascript Flake written by Tanish Bhandari , Feel free to modify it according to your use as this one is tailored for the contents available in this repo only"
          '';
        };
      });
    };
}
