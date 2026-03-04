// generated - do not edit!

import {client_CBasePlayerController} from './CBasePlayerController';
// Class size: 0x958
// BaseClass: : public CS2::client::CBasePlayerController
export const client_CCSPlayerController  = {
	...client_CBasePlayerController,
	m_pInGameMoneyServices: 2056n, // client::CCSPlayerController_InGameMoneyServices**  | Schema_Ptr | Size: 0x8
	m_pInventoryServices: 2064n, // client::CCSPlayerController_InventoryServices**  | Schema_Ptr | Size: 0x8
	m_pActionTrackingServices: 2072n, // client::CCSPlayerController_ActionTrackingServices**  | Schema_Ptr | Size: 0x8
	m_pDamageServices: 2080n, // client::CCSPlayerController_DamageServices**  | Schema_Ptr | Size: 0x8
	m_iPing: 2088n, // uint32_t m_iPing; |  0x828 | Schema_Builtin | Size: 0x4
	m_bHasCommunicationAbuseMute: 2092n, // bool m_bHasCommunicationAbuseMute; |  0x82c | Schema_Builtin | Size: 0x1
	m_uiCommunicationMuteFlags: 2096n, // uint32_t m_uiCommunicationMuteFlags; |  0x830 | Schema_Builtin | Size: 0x4
	m_szCrosshairCodes: 2104n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iPendingTeamNum: 2112n, // uint8_t m_iPendingTeamNum; |  0x840 | Schema_Builtin | Size: 0x1
	m_flForceTeamTime: 2116n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iCompTeammateColor: 2120n, // int32_t m_iCompTeammateColor; |  0x848 | Schema_Builtin | Size: 0x4
	m_bEverPlayedOnTeam: 2124n, // bool m_bEverPlayedOnTeam; |  0x84c | Schema_Builtin | Size: 0x1
	m_flPreviousForceJoinTeamTime: 2128n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_szClan: 2136n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_sSanitizedPlayerName: 2144n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_iCoachingTeam: 2152n, // int32_t m_iCoachingTeam; |  0x868 | Schema_Builtin | Size: 0x4
	m_nPlayerDominated: 2160n, // uint64_t m_nPlayerDominated; |  0x870 | Schema_Builtin | Size: 0x8
	m_nPlayerDominatingMe: 2168n, // uint64_t m_nPlayerDominatingMe; |  0x878 | Schema_Builtin | Size: 0x8
	m_iCompetitiveRanking: 2176n, // int32_t m_iCompetitiveRanking; |  0x880 | Schema_Builtin | Size: 0x4
	m_iCompetitiveWins: 2180n, // int32_t m_iCompetitiveWins; |  0x884 | Schema_Builtin | Size: 0x4
	m_iCompetitiveRankType: 2184n, // int8_t m_iCompetitiveRankType; |  0x888 | Schema_Builtin | Size: 0x1
	m_iCompetitiveRankingPredicted_Win: 2188n, // int32_t m_iCompetitiveRankingPredicted_Win; |  0x88c | Schema_Builtin | Size: 0x4
	m_iCompetitiveRankingPredicted_Loss: 2192n, // int32_t m_iCompetitiveRankingPredicted_Loss; |  0x890 | Schema_Builtin | Size: 0x4
	m_iCompetitiveRankingPredicted_Tie: 2196n, // int32_t m_iCompetitiveRankingPredicted_Tie; |  0x894 | Schema_Builtin | Size: 0x4
	m_nEndMatchNextMapVote: 2200n, // int32_t m_nEndMatchNextMapVote; |  0x898 | Schema_Builtin | Size: 0x4
	m_unActiveQuestId: 2204n, // uint16_t m_unActiveQuestId; |  0x89c | Schema_Builtin | Size: 0x2
	m_rtActiveMissionPeriod: 2208n, // uint32_t m_rtActiveMissionPeriod; |  0x8a0 | Schema_Builtin | Size: 0x4
	m_nQuestProgressReason: 2212n, // client::QuestProgress::Reason  | Schema_DeclaredEnum | Size: 0x4
	m_unPlayerTvControlFlags: 2216n, // uint32_t m_unPlayerTvControlFlags; |  0x8a8 | Schema_Builtin | Size: 0x4
	m_iDraftIndex: 2264n, // int32_t m_iDraftIndex; |  0x8d8 | Schema_Builtin | Size: 0x4
	m_msQueuedModeDisconnectionTimestamp: 2268n, // uint32_t m_msQueuedModeDisconnectionTimestamp; |  0x8dc | Schema_Builtin | Size: 0x4
	m_uiAbandonRecordedReason: 2272n, // uint32_t m_uiAbandonRecordedReason; |  0x8e0 | Schema_Builtin | Size: 0x4
	m_eNetworkDisconnectionReason: 2276n, // uint32_t m_eNetworkDisconnectionReason; |  0x8e4 | Schema_Builtin | Size: 0x4
	m_bCannotBeKicked: 2280n, // bool m_bCannotBeKicked; |  0x8e8 | Schema_Builtin | Size: 0x1
	m_bEverFullyConnected: 2281n, // bool m_bEverFullyConnected; |  0x8e9 | Schema_Builtin | Size: 0x1
	m_bAbandonAllowsSurrender: 2282n, // bool m_bAbandonAllowsSurrender; |  0x8ea | Schema_Builtin | Size: 0x1
	m_bAbandonOffersInstantSurrender: 2283n, // bool m_bAbandonOffersInstantSurrender; |  0x8eb | Schema_Builtin | Size: 0x1
	m_bDisconnection1MinWarningPrinted: 2284n, // bool m_bDisconnection1MinWarningPrinted; |  0x8ec | Schema_Builtin | Size: 0x1
	m_bScoreReported: 2285n, // bool m_bScoreReported; |  0x8ed | Schema_Builtin | Size: 0x1
	m_nDisconnectionTick: 2288n, // int32_t m_nDisconnectionTick; |  0x8f0 | Schema_Builtin | Size: 0x4
	m_bControllingBot: 2304n, // bool m_bControllingBot; |  0x900 | Schema_Builtin | Size: 0x1
	m_bHasControlledBotThisRound: 2305n, // bool m_bHasControlledBotThisRound; |  0x901 | Schema_Builtin | Size: 0x1
	m_bHasBeenControlledByPlayerThisRound: 2306n, // bool m_bHasBeenControlledByPlayerThisRound; |  0x902 | Schema_Builtin | Size: 0x1
	m_nBotsControlledThisRound: 2308n, // int32_t m_nBotsControlledThisRound; |  0x904 | Schema_Builtin | Size: 0x4
	m_bCanControlObservedBot: 2312n, // bool m_bCanControlObservedBot; |  0x908 | Schema_Builtin | Size: 0x1
	m_hPlayerPawn: 2316n, // GlobalTypes::CHandle<client::C_CSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_hObserverPawn: 2320n, // GlobalTypes::CHandle<client::C_CSObserverPawn>  | Schema_Atomic | Size: 0x4
	m_bPawnIsAlive: 2324n, // bool m_bPawnIsAlive; |  0x914 | Schema_Builtin | Size: 0x1
	m_iPawnHealth: 2328n, // uint32_t m_iPawnHealth; |  0x918 | Schema_Builtin | Size: 0x4
	m_iPawnArmor: 2332n, // int32_t m_iPawnArmor; |  0x91c | Schema_Builtin | Size: 0x4
	m_bPawnHasDefuser: 2336n, // bool m_bPawnHasDefuser; |  0x920 | Schema_Builtin | Size: 0x1
	m_bPawnHasHelmet: 2337n, // bool m_bPawnHasHelmet; |  0x921 | Schema_Builtin | Size: 0x1
	m_nPawnCharacterDefIndex: 2338n, // uint16_t m_nPawnCharacterDefIndex; |  0x922 | Schema_Builtin | Size: 0x2
	m_iPawnLifetimeStart: 2340n, // int32_t m_iPawnLifetimeStart; |  0x924 | Schema_Builtin | Size: 0x4
	m_iPawnLifetimeEnd: 2344n, // int32_t m_iPawnLifetimeEnd; |  0x928 | Schema_Builtin | Size: 0x4
	m_iPawnBotDifficulty: 2348n, // int32_t m_iPawnBotDifficulty; |  0x92c | Schema_Builtin | Size: 0x4
	m_hOriginalControllerOfCurrentPawn: 2352n, // GlobalTypes::CHandle<client::CCSPlayerController>  | Schema_Atomic | Size: 0x4
	m_iScore: 2356n, // int32_t m_iScore; |  0x934 | Schema_Builtin | Size: 0x4
	m_recentKillQueue: 2360n, // uint8_t m_recentKillQueue[8]; |  0x938 | Schema_FixedArray | Size: 0x8
	m_nFirstKill: 2368n, // uint8_t m_nFirstKill; |  0x940 | Schema_Builtin | Size: 0x1
	m_nKillCount: 2369n, // uint8_t m_nKillCount; |  0x941 | Schema_Builtin | Size: 0x1
	m_bMvpNoMusic: 2370n, // bool m_bMvpNoMusic; |  0x942 | Schema_Builtin | Size: 0x1
	m_eMvpReason: 2372n, // int32_t m_eMvpReason; |  0x944 | Schema_Builtin | Size: 0x4
	m_iMusicKitID: 2376n, // int32_t m_iMusicKitID; |  0x948 | Schema_Builtin | Size: 0x4
	m_iMusicKitMVPs: 2380n, // int32_t m_iMusicKitMVPs; |  0x94c | Schema_Builtin | Size: 0x4
	m_iMVPs: 2384n, // int32_t m_iMVPs; |  0x950 | Schema_Builtin | Size: 0x4
	m_bIsPlayerNameDirty: 2388n, // bool m_bIsPlayerNameDirty; |  0x954 | Schema_Builtin | Size: 0x1
	m_bFireBulletsSeedSynchronized: 2389n, // bool m_bFireBulletsSeedSynchronized; |  0x955 | Schema_Builtin | Size: 0x1
}
