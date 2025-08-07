
{
  description = "Namaste DSA";

  inputs = {
    flake-schemas.url = "https://flakehub.com/f/DeterminateSystems/flake-schemas/*";
    nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/*";
  };

  outputs = { self, flake-schemas, nixpkgs }:
    let
      supportedSystems = [ "x86_64-linux" "aarch64-darwin" ];
      forEachSupportedSystem = f:
        nixpkgs.lib.genAttrs supportedSystems (system: f {
          pkgs = import nixpkgs { inherit system; };
        });
    in {
      schemas = flake-schemas.schemas;

      devShells = forEachSupportedSystem ({ pkgs }: {
        default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
            nodePackages.prettier
            curl
            git
            jq
            wget
            nixpkgs-fmt
            zsh
          ];

shellHook = ''
  if [ -z "$ZSH_VERSION" ]; then
    export IN_NIX_SHELL=1
    exec zsh --login
  else
    echo -e "\033[1;35m🚀 Welcome to the Namaste DSA Dev Shell!\033[0m"
    echo -e "\033[1;34m🔧 Node: $(node -v) | Git: $(git --version | awk '{print $3}') | Shell: $SHELL\033[0m"
    echo -e "\033[1;32m📁 Project: $PWD\033[0m"
  fi
'';
        };
      });
    };
}
