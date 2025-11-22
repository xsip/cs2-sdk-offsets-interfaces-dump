// generated - do not edit!

import {client_CBasePlayerController} from './CBasePlayerController';
// Class size: 0x948
// BaseClass: : public CS2::client::CBasePlayerController
export const client_CCSPlayerController  = {
	...client_CBasePlayerController,
	m_pInGameMoneyServices: 2040n, // client::CCSPlayerController_InGameMoneyServices**  | Schema_Ptr | Size: 0x8
	m_pInventoryServices: 2048n, // client::CCSPlayerController_InventoryServices**  | Schema_Ptr | Size: 0x8
	m_pActionTrackingServices: 2056n, // client::CCSPlayerController_ActionTrackingServices**  | Schema_Ptr | Size: 0x8
	m_pDamageServices: 2064n, // client::CCSPlayerController_DamageServices**  | Schema_Ptr | Size: 0x8
	m_iPing: 2072n, // uint32_t m_iPing; |  0x818 | Schema_Builtin | Size: 0x4
	m_bHasCommunicationAbuseMute: 2076n, // bool m_bHasCommunicationAbuseMute; |  0x81c | Schema_Builtin | Size: 0x1
	m_uiCommunicationMuteFlags: 2080n, // uint32_t m_uiCommunicationMuteFlags; |  0x820 | Schema_Builtin | Size: 0x4
	m_szCrosshairCodes: 2088n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iPendingTeamNum: 2096n, // uint8_t m_iPendingTeamNum; |  0x830 | Schema_Builtin | Size: 0x1
	m_flForceTeamTime: 2100n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iCompTeammateColor: 2104n, // int32_t m_iCompTeammateColor; |  0x838 | Schema_Builtin | Size: 0x4
	m_bEverPlayedOnTeam: 2108n, // bool m_bEverPlayedOnTeam; |  0x83c | Schema_Builtin | Size: 0x1
	m_flPreviousForceJoinTeamTime: 2112n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_szClan: 2120n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_sSanitizedPlayerName: 2128n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_iCoachingTeam: 2136n, // int32_t m_iCoachingTeam; |  0x858 | Schema_Builtin | Size: 0x4
	m_nPlayerDominated: 2144n, // uint64_t m_nPlayerDominated; |  0x860 | Schema_Builtin | Size: 0x8
	m_nPlayerDominatingMe: 2152n, // uint64_t m_nPlayerDominatingMe; |  0x868 | Schema_Builtin | Size: 0x8
	m_iCompetitiveRanking: 2160n, // int32_t m_iCompetitiveRanking; |  0x870 | Schema_Builtin | Size: 0x4
	m_iCompetitiveWins: 2164n, // int32_t m_iCompetitiveWins; |  0x874 | Schema_Builtin | Size: 0x4
	m_iCompetitiveRankType: 2168n, // int8_t m_iCompetitiveRankType; |  0x878 | Schema_Builtin | Size: 0x1
	m_iCompetitiveRankingPredicted_Win: 2172n, // int32_t m_iCompetitiveRankingPredicted_Win; |  0x87c | Schema_Builtin | Size: 0x4
	m_iCompetitiveRankingPredicted_Loss: 2176n, // int32_t m_iCompetitiveRankingPredicted_Loss; |  0x880 | Schema_Builtin | Size: 0x4
	m_iCompetitiveRankingPredicted_Tie: 2180n, // int32_t m_iCompetitiveRankingPredicted_Tie; |  0x884 | Schema_Builtin | Size: 0x4
	m_nEndMatchNextMapVote: 2184n, // int32_t m_nEndMatchNextMapVote; |  0x888 | Schema_Builtin | Size: 0x4
	m_unActiveQuestId: 2188n, // uint16_t m_unActiveQuestId; |  0x88c | Schema_Builtin | Size: 0x2
	m_rtActiveMissionPeriod: 2192n, // uint32_t m_rtActiveMissionPeriod; |  0x890 | Schema_Builtin | Size: 0x4
	m_nQuestProgressReason: 2196n, // client::QuestProgress::Reason  | Schema_DeclaredEnum | Size: 0x4
	m_unPlayerTvControlFlags: 2200n, // uint32_t m_unPlayerTvControlFlags; |  0x898 | Schema_Builtin | Size: 0x4
	m_iDraftIndex: 2248n, // int32_t m_iDraftIndex; |  0x8c8 | Schema_Builtin | Size: 0x4
	m_msQueuedModeDisconnectionTimestamp: 2252n, // uint32_t m_msQueuedModeDisconnectionTimestamp; |  0x8cc | Schema_Builtin | Size: 0x4
	m_uiAbandonRecordedReason: 2256n, // uint32_t m_uiAbandonRecordedReason; |  0x8d0 | Schema_Builtin | Size: 0x4
	m_eNetworkDisconnectionReason: 2260n, // uint32_t m_eNetworkDisconnectionReason; |  0x8d4 | Schema_Builtin | Size: 0x4
	m_bCannotBeKicked: 2264n, // bool m_bCannotBeKicked; |  0x8d8 | Schema_Builtin | Size: 0x1
	m_bEverFullyConnected: 2265n, // bool m_bEverFullyConnected; |  0x8d9 | Schema_Builtin | Size: 0x1
	m_bAbandonAllowsSurrender: 2266n, // bool m_bAbandonAllowsSurrender; |  0x8da | Schema_Builtin | Size: 0x1
	m_bAbandonOffersInstantSurrender: 2267n, // bool m_bAbandonOffersInstantSurrender; |  0x8db | Schema_Builtin | Size: 0x1
	m_bDisconnection1MinWarningPrinted: 2268n, // bool m_bDisconnection1MinWarningPrinted; |  0x8dc | Schema_Builtin | Size: 0x1
	m_bScoreReported: 2269n, // bool m_bScoreReported; |  0x8dd | Schema_Builtin | Size: 0x1
	m_nDisconnectionTick: 2272n, // int32_t m_nDisconnectionTick; |  0x8e0 | Schema_Builtin | Size: 0x4
	m_bControllingBot: 2288n, // bool m_bControllingBot; |  0x8f0 | Schema_Builtin | Size: 0x1
	m_bHasControlledBotThisRound: 2289n, // bool m_bHasControlledBotThisRound; |  0x8f1 | Schema_Builtin | Size: 0x1
	m_bHasBeenControlledByPlayerThisRound: 2290n, // bool m_bHasBeenControlledByPlayerThisRound; |  0x8f2 | Schema_Builtin | Size: 0x1
	m_nBotsControlledThisRound: 2292n, // int32_t m_nBotsControlledThisRound; |  0x8f4 | Schema_Builtin | Size: 0x4
	m_bCanControlObservedBot: 2296n, // bool m_bCanControlObservedBot; |  0x8f8 | Schema_Builtin | Size: 0x1
	m_hPlayerPawn: 2300n, // GlobalTypes::CHandle<client::C_CSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_hObserverPawn: 2304n, // GlobalTypes::CHandle<client::C_CSObserverPawn>  | Schema_Atomic | Size: 0x4
	m_bPawnIsAlive: 2308n, // bool m_bPawnIsAlive; |  0x904 | Schema_Builtin | Size: 0x1
	m_iPawnHealth: 2312n, // uint32_t m_iPawnHealth; |  0x908 | Schema_Builtin | Size: 0x4
	m_iPawnArmor: 2316n, // int32_t m_iPawnArmor; |  0x90c | Schema_Builtin | Size: 0x4
	m_bPawnHasDefuser: 2320n, // bool m_bPawnHasDefuser; |  0x910 | Schema_Builtin | Size: 0x1
	m_bPawnHasHelmet: 2321n, // bool m_bPawnHasHelmet; |  0x911 | Schema_Builtin | Size: 0x1
	m_nPawnCharacterDefIndex: 2322n, // uint16_t m_nPawnCharacterDefIndex; |  0x912 | Schema_Builtin | Size: 0x2
	m_iPawnLifetimeStart: 2324n, // int32_t m_iPawnLifetimeStart; |  0x914 | Schema_Builtin | Size: 0x4
	m_iPawnLifetimeEnd: 2328n, // int32_t m_iPawnLifetimeEnd; |  0x918 | Schema_Builtin | Size: 0x4
	m_iPawnBotDifficulty: 2332n, // int32_t m_iPawnBotDifficulty; |  0x91c | Schema_Builtin | Size: 0x4
	m_hOriginalControllerOfCurrentPawn: 2336n, // GlobalTypes::CHandle<client::CCSPlayerController>  | Schema_Atomic | Size: 0x4
	m_iScore: 2340n, // int32_t m_iScore; |  0x924 | Schema_Builtin | Size: 0x4
	m_recentKillQueue: 2344n, // uint8_t m_recentKillQueue[8]; |  0x928 | Schema_FixedArray | Size: 0x8
	m_nFirstKill: 2352n, // uint8_t m_nFirstKill; |  0x930 | Schema_Builtin | Size: 0x1
	m_nKillCount: 2353n, // uint8_t m_nKillCount; |  0x931 | Schema_Builtin | Size: 0x1
	m_bMvpNoMusic: 2354n, // bool m_bMvpNoMusic; |  0x932 | Schema_Builtin | Size: 0x1
	m_eMvpReason: 2356n, // int32_t m_eMvpReason; |  0x934 | Schema_Builtin | Size: 0x4
	m_iMusicKitID: 2360n, // int32_t m_iMusicKitID; |  0x938 | Schema_Builtin | Size: 0x4
	m_iMusicKitMVPs: 2364n, // int32_t m_iMusicKitMVPs; |  0x93c | Schema_Builtin | Size: 0x4
	m_iMVPs: 2368n, // int32_t m_iMVPs; |  0x940 | Schema_Builtin | Size: 0x4
	m_bIsPlayerNameDirty: 2372n, // bool m_bIsPlayerNameDirty; |  0x944 | Schema_Builtin | Size: 0x1
	m_bFireBulletsSeedSynchronized: 2373n, // bool m_bFireBulletsSeedSynchronized; |  0x945 | Schema_Builtin | Size: 0x1
}
