import { Address, log } from "@graphprotocol/graph-ts";
import { Transfer } from "../generated/CowProtocolToken/CowProtocolToken";

const NON_CIRCULATING_MAINNET = [
  // CoW DAO Safe
  Address.fromString("0xcA771eda0c70aA7d053aB1B25004559B918FE662"),
  // Vested tokens (vCOW token address)
  Address.fromString("0xD057B63f5E69CF1B929b356b579Cba08D7688048"),
  // TODO - add GnosisDAO Vesting contract Mainnet
];

const NON_CIRCULATING_GCHAIN = [
  // CoW DAO Safe
  Address.fromString("0xcA771eda0c70aA7d053aB1B25004559B918FE662"),
  // Gchain Vested tokens (vCOW token address)
  Address.fromString("0xc20C9C13E853fc64d054b73fF21d3636B2d97eaB"),
  // TODO - add GnosisDAO Vesting contract Gchain
];

export function handleTransfer(
  event: Transfer,
  nonCirculating: Address[]
): void {
  log.info("Received Transfer Event at tx {}", [
    event.transaction.hash.toHex(),
  ]);
  log.info("Non circulating supply list has length {}", [
    nonCirculating.length.toString(),
  ]);
}

export function handleMainnetTransfer(event: Transfer): void {
  handleTransfer(event, NON_CIRCULATING_MAINNET);
}

export function handleGchainTransfer(event: Transfer): void {
  handleTransfer(event, NON_CIRCULATING_GCHAIN);
}
