{ pkgs ? import <nixpkgs> {} }:

let
  common = import ../common-packages.nix { inherit pkgs; };
in

pkgs.mkShell {
  buildInputs = [
    common.nodejs
    common.yarn
    pkgs.typescript
  ];
}
