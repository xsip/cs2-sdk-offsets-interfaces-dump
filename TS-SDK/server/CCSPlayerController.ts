// generated - do not edit!

import {server_CBasePlayerController} from './CBasePlayerController';
// Class size: 0xAA0
// BaseClass: : public CS2::server::CBasePlayerController
export const server_CCSPlayerController  = {
	...server_CBasePlayerController,
	m_pInGameMoneyServices: 2008n, // server::CCSPlayerController_InGameMoneyServices**  | Schema_Ptr | Size: 0x8
	m_pInventoryServices: 2016n, // server::CCSPlayerController_InventoryServices**  | Schema_Ptr | Size: 0x8
	m_pActionTrackingServices: 2024n, // server::CCSPlayerController_ActionTrackingServices**  | Schema_Ptr | Size: 0x8
	m_pDamageServices: 2032n, // server::CCSPlayerController_DamageServices**  | Schema_Ptr | Size: 0x8
	m_iPing: 2040n, // uint32_t m_iPing; |  0x7f8 | Schema_Builtin | Size: 0x4
	m_bHasCommunicationAbuseMute: 2044n, // bool m_bHasCommunicationAbuseMute; |  0x7fc | Schema_Builtin | Size: 0x1
	m_uiCommunicationMuteFlags: 2048n, // uint32_t m_uiCommunicationMuteFlags; |  0x800 | Schema_Builtin | Size: 0x4
	m_szCrosshairCodes: 2056n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iPendingTeamNum: 2064n, // uint8_t m_iPendingTeamNum; |  0x810 | Schema_Builtin | Size: 0x1
	m_flForceTeamTime: 2068n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iCompTeammateColor: 2072n, // int32_t m_iCompTeammateColor; |  0x818 | Schema_Builtin | Size: 0x4
	m_bEverPlayedOnTeam: 2076n, // bool m_bEverPlayedOnTeam; |  0x81c | Schema_Builtin | Size: 0x1
	m_bAttemptedToGetColor: 2077n, // bool m_bAttemptedToGetColor; |  0x81d | Schema_Builtin | Size: 0x1
	m_iTeammatePreferredColor: 2080n, // int32_t m_iTeammatePreferredColor; |  0x820 | Schema_Builtin | Size: 0x4
	m_bTeamChanged: 2084n, // bool m_bTeamChanged; |  0x824 | Schema_Builtin | Size: 0x1
	m_bInSwitchTeam: 2085n, // bool m_bInSwitchTeam; |  0x825 | Schema_Builtin | Size: 0x1
	m_bHasSeenJoinGame: 2086n, // bool m_bHasSeenJoinGame; |  0x826 | Schema_Builtin | Size: 0x1
	m_bJustBecameSpectator: 2087n, // bool m_bJustBecameSpectator; |  0x827 | Schema_Builtin | Size: 0x1
	m_bSwitchTeamsOnNextRoundReset: 2088n, // bool m_bSwitchTeamsOnNextRoundReset; |  0x828 | Schema_Builtin | Size: 0x1
	m_bRemoveAllItemsOnNextRoundReset: 2089n, // bool m_bRemoveAllItemsOnNextRoundReset; |  0x829 | Schema_Builtin | Size: 0x1
	m_flLastJoinTeamTime: 2092n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_szClan: 2096n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iCoachingTeam: 2104n, // int32_t m_iCoachingTeam; |  0x838 | Schema_Builtin | Size: 0x4
	m_nPlayerDominated: 2112n, // uint64_t m_nPlayerDominated; |  0x840 | Schema_Builtin | Size: 0x8
	m_nPlayerDominatingMe: 2120n, // uint64_t m_nPlayerDominatingMe; |  0x848 | Schema_Builtin | Size: 0x8
	m_iCompetitiveRanking: 2128n, // int32_t m_iCompetitiveRanking; |  0x850 | Schema_Builtin | Size: 0x4
	m_iCompetitiveWins: 2132n, // int32_t m_iCompetitiveWins; |  0x854 | Schema_Builtin | Size: 0x4
	m_iCompetitiveRankType: 2136n, // int8_t m_iCompetitiveRankType; |  0x858 | Schema_Builtin | Size: 0x1
	m_iCompetitiveRankingPredicted_Win: 2140n, // int32_t m_iCompetitiveRankingPredicted_Win; |  0x85c | Schema_Builtin | Size: 0x4
	m_iCompetitiveRankingPredicted_Loss: 2144n, // int32_t m_iCompetitiveRankingPredicted_Loss; |  0x860 | Schema_Builtin | Size: 0x4
	m_iCompetitiveRankingPredicted_Tie: 2148n, // int32_t m_iCompetitiveRankingPredicted_Tie; |  0x864 | Schema_Builtin | Size: 0x4
	m_nEndMatchNextMapVote: 2152n, // int32_t m_nEndMatchNextMapVote; |  0x868 | Schema_Builtin | Size: 0x4
	m_unActiveQuestId: 2156n, // uint16_t m_unActiveQuestId; |  0x86c | Schema_Builtin | Size: 0x2
	m_rtActiveMissionPeriod: 2160n, // uint32_t m_rtActiveMissionPeriod; |  0x870 | Schema_Builtin | Size: 0x4
	m_nQuestProgressReason: 2164n, // client::QuestProgress::Reason  | Schema_DeclaredEnum | Size: 0x4
	m_unPlayerTvControlFlags: 2168n, // uint32_t m_unPlayerTvControlFlags; |  0x878 | Schema_Builtin | Size: 0x4
	m_iDraftIndex: 2216n, // int32_t m_iDraftIndex; |  0x8a8 | Schema_Builtin | Size: 0x4
	m_msQueuedModeDisconnectionTimestamp: 2220n, // uint32_t m_msQueuedModeDisconnectionTimestamp; |  0x8ac | Schema_Builtin | Size: 0x4
	m_uiAbandonRecordedReason: 2224n, // uint32_t m_uiAbandonRecordedReason; |  0x8b0 | Schema_Builtin | Size: 0x4
	m_eNetworkDisconnectionReason: 2228n, // uint32_t m_eNetworkDisconnectionReason; |  0x8b4 | Schema_Builtin | Size: 0x4
	m_bCannotBeKicked: 2232n, // bool m_bCannotBeKicked; |  0x8b8 | Schema_Builtin | Size: 0x1
	m_bEverFullyConnected: 2233n, // bool m_bEverFullyConnected; |  0x8b9 | Schema_Builtin | Size: 0x1
	m_bAbandonAllowsSurrender: 2234n, // bool m_bAbandonAllowsSurrender; |  0x8ba | Schema_Builtin | Size: 0x1
	m_bAbandonOffersInstantSurrender: 2235n, // bool m_bAbandonOffersInstantSurrender; |  0x8bb | Schema_Builtin | Size: 0x1
	m_bDisconnection1MinWarningPrinted: 2236n, // bool m_bDisconnection1MinWarningPrinted; |  0x8bc | Schema_Builtin | Size: 0x1
	m_bScoreReported: 2237n, // bool m_bScoreReported; |  0x8bd | Schema_Builtin | Size: 0x1
	m_nDisconnectionTick: 2240n, // int32_t m_nDisconnectionTick; |  0x8c0 | Schema_Builtin | Size: 0x4
	m_bControllingBot: 2256n, // bool m_bControllingBot; |  0x8d0 | Schema_Builtin | Size: 0x1
	m_bHasControlledBotThisRound: 2257n, // bool m_bHasControlledBotThisRound; |  0x8d1 | Schema_Builtin | Size: 0x1
	m_bHasBeenControlledByPlayerThisRound: 2258n, // bool m_bHasBeenControlledByPlayerThisRound; |  0x8d2 | Schema_Builtin | Size: 0x1
	m_nBotsControlledThisRound: 2260n, // int32_t m_nBotsControlledThisRound; |  0x8d4 | Schema_Builtin | Size: 0x4
	m_bCanControlObservedBot: 2264n, // bool m_bCanControlObservedBot; |  0x8d8 | Schema_Builtin | Size: 0x1
	m_hPlayerPawn: 2268n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_hObserverPawn: 2272n, // GlobalTypes::CHandle<server::CCSObserverPawn>  | Schema_Atomic | Size: 0x4
	m_DesiredObserverMode: 2276n, // int32_t m_DesiredObserverMode; |  0x8e4 | Schema_Builtin | Size: 0x4
	m_hDesiredObserverTarget: 2280n, // GlobalTypes::CEntityHandle  | Schema_Atomic | Size: 0x4
	m_bPawnIsAlive: 2284n, // bool m_bPawnIsAlive; |  0x8ec | Schema_Builtin | Size: 0x1
	m_iPawnHealth: 2288n, // uint32_t m_iPawnHealth; |  0x8f0 | Schema_Builtin | Size: 0x4
	m_iPawnArmor: 2292n, // int32_t m_iPawnArmor; |  0x8f4 | Schema_Builtin | Size: 0x4
	m_bPawnHasDefuser: 2296n, // bool m_bPawnHasDefuser; |  0x8f8 | Schema_Builtin | Size: 0x1
	m_bPawnHasHelmet: 2297n, // bool m_bPawnHasHelmet; |  0x8f9 | Schema_Builtin | Size: 0x1
	m_nPawnCharacterDefIndex: 2298n, // uint16_t m_nPawnCharacterDefIndex; |  0x8fa | Schema_Builtin | Size: 0x2
	m_iPawnLifetimeStart: 2300n, // int32_t m_iPawnLifetimeStart; |  0x8fc | Schema_Builtin | Size: 0x4
	m_iPawnLifetimeEnd: 2304n, // int32_t m_iPawnLifetimeEnd; |  0x900 | Schema_Builtin | Size: 0x4
	m_iPawnBotDifficulty: 2308n, // int32_t m_iPawnBotDifficulty; |  0x904 | Schema_Builtin | Size: 0x4
	m_hOriginalControllerOfCurrentPawn: 2312n, // GlobalTypes::CHandle<server::CCSPlayerController>  | Schema_Atomic | Size: 0x4
	m_iScore: 2316n, // int32_t m_iScore; |  0x90c | Schema_Builtin | Size: 0x4
	m_iRoundScore: 2320n, // int32_t m_iRoundScore; |  0x910 | Schema_Builtin | Size: 0x4
	m_iRoundsWon: 2324n, // int32_t m_iRoundsWon; |  0x914 | Schema_Builtin | Size: 0x4
	m_recentKillQueue: 2328n, // uint8_t m_recentKillQueue[8]; |  0x918 | Schema_FixedArray | Size: 0x8
	m_nFirstKill: 2336n, // uint8_t m_nFirstKill; |  0x920 | Schema_Builtin | Size: 0x1
	m_nKillCount: 2337n, // uint8_t m_nKillCount; |  0x921 | Schema_Builtin | Size: 0x1
	m_bMvpNoMusic: 2338n, // bool m_bMvpNoMusic; |  0x922 | Schema_Builtin | Size: 0x1
	m_eMvpReason: 2340n, // int32_t m_eMvpReason; |  0x924 | Schema_Builtin | Size: 0x4
	m_iMusicKitID: 2344n, // int32_t m_iMusicKitID; |  0x928 | Schema_Builtin | Size: 0x4
	m_iMusicKitMVPs: 2348n, // int32_t m_iMusicKitMVPs; |  0x92c | Schema_Builtin | Size: 0x4
	m_iMVPs: 2352n, // int32_t m_iMVPs; |  0x930 | Schema_Builtin | Size: 0x4
	m_nUpdateCounter: 2356n, // int32_t m_nUpdateCounter; |  0x934 | Schema_Builtin | Size: 0x4
	m_flSmoothedPing: 2360n, // float32 m_flSmoothedPing; |  0x938 | Schema_Builtin | Size: 0x4
	m_lastHeldVoteTimer: 2368n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_bShowHints: 2392n, // bool m_bShowHints; |  0x958 | Schema_Builtin | Size: 0x1
	m_iNextTimeCheck: 2396n, // int32_t m_iNextTimeCheck; |  0x95c | Schema_Builtin | Size: 0x4
	m_bJustDidTeamKill: 2400n, // bool m_bJustDidTeamKill; |  0x960 | Schema_Builtin | Size: 0x1
	m_bPunishForTeamKill: 2401n, // bool m_bPunishForTeamKill; |  0x961 | Schema_Builtin | Size: 0x1
	m_bGaveTeamDamageWarning: 2402n, // bool m_bGaveTeamDamageWarning; |  0x962 | Schema_Builtin | Size: 0x1
	m_bGaveTeamDamageWarningThisRound: 2403n, // bool m_bGaveTeamDamageWarningThisRound; |  0x963 | Schema_Builtin | Size: 0x1
	m_dblLastReceivedPacketPlatFloatTime: 2408n, // float64 m_dblLastReceivedPacketPlatFloatTime; |  0x968 | Schema_Builtin | Size: 0x8
	m_LastTeamDamageWarningTime: 2416n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_LastTimePlayerWasDisconnectedForPawnsRemove: 2420n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nSuspiciousHitCount: 2424n, // uint32_t m_nSuspiciousHitCount; |  0x978 | Schema_Builtin | Size: 0x4
	m_nNonSuspiciousHitStreak: 2428n, // uint32_t m_nNonSuspiciousHitStreak; |  0x97c | Schema_Builtin | Size: 0x4
	m_bFireBulletsSeedSynchronized: 2593n, // bool m_bFireBulletsSeedSynchronized; |  0xa21 | Schema_Builtin | Size: 0x1
}
