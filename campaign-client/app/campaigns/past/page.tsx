import { getPastCampaigns } from "@/app/actions/getPastCampaigns";
import CampaignCards from "@/app/components/CampaignCards";
import Link from "next/link";
import React from "react";

const PastCampaignsPage = async () => {
  const campaigns = await getPastCampaigns();
  return (
    <main>
      <h1
        className="
          mt-6 
          text-center 
          text-5xl 
          font-bold 
          tracking-tight 
          text-gray-500
        "
      >
        <span className="text-red-200">Past</span> Campaigns
      </h1>
      <nav className="m-2 text-gray-400 hover:text-gray-200">
        <Link href="/campaigns">
          <p>{`<`} Back to All Campaigns</p>
        </Link>
      </nav>
      <main className="mt-10 px-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {campaigns.map((campaign) => (
          <CampaignCards link={`/campaigns/campaign/${campaign.id}`}>
            <h4
              className="ml-6 text-2xl 
            font-bold 
            tracking-tight 
            text-gray-400"
            >
              {campaign.topic}
            </h4>
            <div className="font-semibold text-gray-400 flex flex-col items-start justify-evenly">
              <p>
                Created By:{" "}
                <span className="text-gray-300 font-normal">
                  {campaign.creator.name}
                </span>
              </p>
              <p>
                Address:{" "}
                <span className="text-gray-300 font-normal">{`${campaign.creator.walletAddress.slice(
                  0,
                  5
                )}...${campaign.creator.walletAddress.slice(
                  campaign.creator.walletAddress.length - 5,
                  campaign.creator.walletAddress.length
                )}`}</span>
              </p>
              <p>
                Ends At:{" "}
                <span className="text-gray-300 font-normal">
                  {campaign.endTime.toString()}
                </span>
              </p>
            </div>
          </CampaignCards>
        ))}
      </main>
    </main>
  );
};

export default PastCampaignsPage;
