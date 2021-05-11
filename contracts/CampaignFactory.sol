// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "./Campaign.sol";


contract CampaignFactory {
    address[] public deployedCampaigns;

    event CreateNewCampaign(address child); // maybe listen for events


    function createCampaign(uint minimum) public {
        Campaign newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(address(newCampaign));
    }

    function getDeployedCampaigns() public view returns (address[] memory)  {
        return deployedCampaigns;
    }
}