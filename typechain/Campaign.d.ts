/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CampaignInterface extends ethers.utils.Interface {
  functions: {
    "approveRequest(uint256)": FunctionFragment;
    "approvers(address)": FunctionFragment;
    "approversCount()": FunctionFragment;
    "contribute()": FunctionFragment;
    "createRequest(string,uint256,address)": FunctionFragment;
    "finalizeRequest(uint256)": FunctionFragment;
    "getRequestsCount()": FunctionFragment;
    "getSummary()": FunctionFragment;
    "manager()": FunctionFragment;
    "minimumContribution()": FunctionFragment;
    "requests(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approveRequest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "approvers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "approversCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contribute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createRequest",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeRequest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSummary",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minimumContribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requests",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approvers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approversCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "contribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSummary", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minimumContribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "requests", data: BytesLike): Result;

  events: {};
}

export class Campaign extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CampaignInterface;

  functions: {
    approveRequest(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approveRequest(uint256)"(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    approvers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "approvers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    approversCount(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "approversCount()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    contribute(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "contribute()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    createRequest(
      description: string,
      value: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createRequest(string,uint256,address)"(
      description: string,
      value: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    finalizeRequest(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "finalizeRequest(uint256)"(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getRequestsCount(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getRequestsCount()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getSummary(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: string;
    }>;

    "getSummary()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: string;
    }>;

    manager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "manager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    minimumContribution(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "minimumContribution()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    requests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      description: string;
      value: BigNumber;
      recipient: string;
      complete: boolean;
      approvalCount: BigNumber;
      0: string;
      1: BigNumber;
      2: string;
      3: boolean;
      4: BigNumber;
    }>;

    "requests(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      description: string;
      value: BigNumber;
      recipient: string;
      complete: boolean;
      approvalCount: BigNumber;
      0: string;
      1: BigNumber;
      2: string;
      3: boolean;
      4: BigNumber;
    }>;
  };

  approveRequest(
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approveRequest(uint256)"(
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  approvers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "approvers(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  approversCount(overrides?: CallOverrides): Promise<BigNumber>;

  "approversCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  contribute(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "contribute()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  createRequest(
    description: string,
    value: BigNumberish,
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createRequest(string,uint256,address)"(
    description: string,
    value: BigNumberish,
    recipient: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  finalizeRequest(
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "finalizeRequest(uint256)"(
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getRequestsCount(overrides?: CallOverrides): Promise<BigNumber>;

  "getRequestsCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  getSummary(
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: string;
  }>;

  "getSummary()"(
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: string;
  }>;

  manager(overrides?: CallOverrides): Promise<string>;

  "manager()"(overrides?: CallOverrides): Promise<string>;

  minimumContribution(overrides?: CallOverrides): Promise<BigNumber>;

  "minimumContribution()"(overrides?: CallOverrides): Promise<BigNumber>;

  requests(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    description: string;
    value: BigNumber;
    recipient: string;
    complete: boolean;
    approvalCount: BigNumber;
    0: string;
    1: BigNumber;
    2: string;
    3: boolean;
    4: BigNumber;
  }>;

  "requests(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    description: string;
    value: BigNumber;
    recipient: string;
    complete: boolean;
    approvalCount: BigNumber;
    0: string;
    1: BigNumber;
    2: string;
    3: boolean;
    4: BigNumber;
  }>;

  callStatic: {
    approveRequest(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "approveRequest(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    approvers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "approvers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    approversCount(overrides?: CallOverrides): Promise<BigNumber>;

    "approversCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    contribute(overrides?: CallOverrides): Promise<void>;

    "contribute()"(overrides?: CallOverrides): Promise<void>;

    createRequest(
      description: string,
      value: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "createRequest(string,uint256,address)"(
      description: string,
      value: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    finalizeRequest(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "finalizeRequest(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getRequestsCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getRequestsCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getSummary(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: string;
    }>;

    "getSummary()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: string;
    }>;

    manager(overrides?: CallOverrides): Promise<string>;

    "manager()"(overrides?: CallOverrides): Promise<string>;

    minimumContribution(overrides?: CallOverrides): Promise<BigNumber>;

    "minimumContribution()"(overrides?: CallOverrides): Promise<BigNumber>;

    requests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      description: string;
      value: BigNumber;
      recipient: string;
      complete: boolean;
      approvalCount: BigNumber;
      0: string;
      1: BigNumber;
      2: string;
      3: boolean;
      4: BigNumber;
    }>;

    "requests(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      description: string;
      value: BigNumber;
      recipient: string;
      complete: boolean;
      approvalCount: BigNumber;
      0: string;
      1: BigNumber;
      2: string;
      3: boolean;
      4: BigNumber;
    }>;
  };

  filters: {};

  estimateGas: {
    approveRequest(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approveRequest(uint256)"(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    approvers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "approvers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approversCount(overrides?: CallOverrides): Promise<BigNumber>;

    "approversCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    contribute(overrides?: PayableOverrides): Promise<BigNumber>;

    "contribute()"(overrides?: PayableOverrides): Promise<BigNumber>;

    createRequest(
      description: string,
      value: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createRequest(string,uint256,address)"(
      description: string,
      value: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    finalizeRequest(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "finalizeRequest(uint256)"(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getRequestsCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getRequestsCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getSummary(overrides?: CallOverrides): Promise<BigNumber>;

    "getSummary()"(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    "manager()"(overrides?: CallOverrides): Promise<BigNumber>;

    minimumContribution(overrides?: CallOverrides): Promise<BigNumber>;

    "minimumContribution()"(overrides?: CallOverrides): Promise<BigNumber>;

    requests(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "requests(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveRequest(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approveRequest(uint256)"(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    approvers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "approvers(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approversCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "approversCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contribute(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "contribute()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    createRequest(
      description: string,
      value: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createRequest(string,uint256,address)"(
      description: string,
      value: BigNumberish,
      recipient: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    finalizeRequest(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "finalizeRequest(uint256)"(
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getRequestsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getRequestsCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSummary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getSummary()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "manager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumContribution(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "minimumContribution()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "requests(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
