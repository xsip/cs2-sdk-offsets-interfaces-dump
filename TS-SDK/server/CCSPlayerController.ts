// generated - do not edit!

import {server_CBasePlayerController} from './CBasePlayerController';
// Class size: 0xAE8
// BaseClass: : public CS2::server::CBasePlayerController
export const server_CCSPlayerController  = {
	...server_CBasePlayerController,
	m_pInGameMoneyServices: 2080n, // server::CCSPlayerController_InGameMoneyServices**  | Schema_Ptr | Size: 0x8
	m_pInventoryServices: 2088n, // server::CCSPlayerController_InventoryServices**  | Schema_Ptr | Size: 0x8
	m_pActionTrackingServices: 2096n, // server::CCSPlayerController_ActionTrackingServices**  | Schema_Ptr | Size: 0x8
	m_pDamageServices: 2104n, // server::CCSPlayerController_DamageServices**  | Schema_Ptr | Size: 0x8
	m_iPing: 2112n, // uint32_t m_iPing; |  0x840 | Schema_Builtin | Size: 0x4
	m_bHasCommunicationAbuseMute: 2116n, // bool m_bHasCommunicationAbuseMute; |  0x844 | Schema_Builtin | Size: 0x1
	m_uiCommunicationMuteFlags: 2120n, // uint32_t m_uiCommunicationMuteFlags; |  0x848 | Schema_Builtin | Size: 0x4
	m_szCrosshairCodes: 2128n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iPendingTeamNum: 2136n, // uint8_t m_iPendingTeamNum; |  0x858 | Schema_Builtin | Size: 0x1
	m_flForceTeamTime: 2140n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_iCompTeammateColor: 2144n, // int32_t m_iCompTeammateColor; |  0x860 | Schema_Builtin | Size: 0x4
	m_bEverPlayedOnTeam: 2148n, // bool m_bEverPlayedOnTeam; |  0x864 | Schema_Builtin | Size: 0x1
	m_bAttemptedToGetColor: 2149n, // bool m_bAttemptedToGetColor; |  0x865 | Schema_Builtin | Size: 0x1
	m_iTeammatePreferredColor: 2152n, // int32_t m_iTeammatePreferredColor; |  0x868 | Schema_Builtin | Size: 0x4
	m_bTeamChanged: 2156n, // bool m_bTeamChanged; |  0x86c | Schema_Builtin | Size: 0x1
	m_bInSwitchTeam: 2157n, // bool m_bInSwitchTeam; |  0x86d | Schema_Builtin | Size: 0x1
	m_bHasSeenJoinGame: 2158n, // bool m_bHasSeenJoinGame; |  0x86e | Schema_Builtin | Size: 0x1
	m_bJustBecameSpectator: 2159n, // bool m_bJustBecameSpectator; |  0x86f | Schema_Builtin | Size: 0x1
	m_bSwitchTeamsOnNextRoundReset: 2160n, // bool m_bSwitchTeamsOnNextRoundReset; |  0x870 | Schema_Builtin | Size: 0x1
	m_bRemoveAllItemsOnNextRoundReset: 2161n, // bool m_bRemoveAllItemsOnNextRoundReset; |  0x871 | Schema_Builtin | Size: 0x1
	m_flLastJoinTeamTime: 2164n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_szClan: 2168n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iCoachingTeam: 2176n, // int32_t m_iCoachingTeam; |  0x880 | Schema_Builtin | Size: 0x4
	m_nPlayerDominated: 2184n, // uint64_t m_nPlayerDominated; |  0x888 | Schema_Builtin | Size: 0x8
	m_nPlayerDominatingMe: 2192n, // uint64_t m_nPlayerDominatingMe; |  0x890 | Schema_Builtin | Size: 0x8
	m_iCompetitiveRanking: 2200n, // int32_t m_iCompetitiveRanking; |  0x898 | Schema_Builtin | Size: 0x4
	m_iCompetitiveWins: 2204n, // int32_t m_iCompetitiveWins; |  0x89c | Schema_Builtin | Size: 0x4
	m_iCompetitiveRankType: 2208n, // int8_t m_iCompetitiveRankType; |  0x8a0 | Schema_Builtin | Size: 0x1
	m_iCompetitiveRankingPredicted_Win: 2212n, // int32_t m_iCompetitiveRankingPredicted_Win; |  0x8a4 | Schema_Builtin | Size: 0x4
	m_iCompetitiveRankingPredicted_Loss: 2216n, // int32_t m_iCompetitiveRankingPredicted_Loss; |  0x8a8 | Schema_Builtin | Size: 0x4
	m_iCompetitiveRankingPredicted_Tie: 2220n, // int32_t m_iCompetitiveRankingPredicted_Tie; |  0x8ac | Schema_Builtin | Size: 0x4
	m_nEndMatchNextMapVote: 2224n, // int32_t m_nEndMatchNextMapVote; |  0x8b0 | Schema_Builtin | Size: 0x4
	m_unActiveQuestId: 2228n, // uint16_t m_unActiveQuestId; |  0x8b4 | Schema_Builtin | Size: 0x2
	m_rtActiveMissionPeriod: 2232n, // uint32_t m_rtActiveMissionPeriod; |  0x8b8 | Schema_Builtin | Size: 0x4
	m_nQuestProgressReason: 2236n, // client::QuestProgress::Reason  | Schema_DeclaredEnum | Size: 0x4
	m_unPlayerTvControlFlags: 2240n, // uint32_t m_unPlayerTvControlFlags; |  0x8c0 | Schema_Builtin | Size: 0x4
	m_iDraftIndex: 2288n, // int32_t m_iDraftIndex; |  0x8f0 | Schema_Builtin | Size: 0x4
	m_msQueuedModeDisconnectionTimestamp: 2292n, // uint32_t m_msQueuedModeDisconnectionTimestamp; |  0x8f4 | Schema_Builtin | Size: 0x4
	m_uiAbandonRecordedReason: 2296n, // uint32_t m_uiAbandonRecordedReason; |  0x8f8 | Schema_Builtin | Size: 0x4
	m_eNetworkDisconnectionReason: 2300n, // uint32_t m_eNetworkDisconnectionReason; |  0x8fc | Schema_Builtin | Size: 0x4
	m_bCannotBeKicked: 2304n, // bool m_bCannotBeKicked; |  0x900 | Schema_Builtin | Size: 0x1
	m_bEverFullyConnected: 2305n, // bool m_bEverFullyConnected; |  0x901 | Schema_Builtin | Size: 0x1
	m_bAbandonAllowsSurrender: 2306n, // bool m_bAbandonAllowsSurrender; |  0x902 | Schema_Builtin | Size: 0x1
	m_bAbandonOffersInstantSurrender: 2307n, // bool m_bAbandonOffersInstantSurrender; |  0x903 | Schema_Builtin | Size: 0x1
	m_bDisconnection1MinWarningPrinted: 2308n, // bool m_bDisconnection1MinWarningPrinted; |  0x904 | Schema_Builtin | Size: 0x1
	m_bScoreReported: 2309n, // bool m_bScoreReported; |  0x905 | Schema_Builtin | Size: 0x1
	m_nDisconnectionTick: 2312n, // int32_t m_nDisconnectionTick; |  0x908 | Schema_Builtin | Size: 0x4
	m_bControllingBot: 2328n, // bool m_bControllingBot; |  0x918 | Schema_Builtin | Size: 0x1
	m_bHasControlledBotThisRound: 2329n, // bool m_bHasControlledBotThisRound; |  0x919 | Schema_Builtin | Size: 0x1
	m_bHasBeenControlledByPlayerThisRound: 2330n, // bool m_bHasBeenControlledByPlayerThisRound; |  0x91a | Schema_Builtin | Size: 0x1
	m_nBotsControlledThisRound: 2332n, // int32_t m_nBotsControlledThisRound; |  0x91c | Schema_Builtin | Size: 0x4
	m_bCanControlObservedBot: 2336n, // bool m_bCanControlObservedBot; |  0x920 | Schema_Builtin | Size: 0x1
	m_hPlayerPawn: 2340n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_hObserverPawn: 2344n, // GlobalTypes::CHandle<server::CCSObserverPawn>  | Schema_Atomic | Size: 0x4
	m_DesiredObserverMode: 2348n, // int32_t m_DesiredObserverMode; |  0x92c | Schema_Builtin | Size: 0x4
	m_hDesiredObserverTarget: 2352n, // GlobalTypes::CEntityHandle  | Schema_Atomic | Size: 0x4
	m_bPawnIsAlive: 2356n, // bool m_bPawnIsAlive; |  0x934 | Schema_Builtin | Size: 0x1
	m_iPawnHealth: 2360n, // uint32_t m_iPawnHealth; |  0x938 | Schema_Builtin | Size: 0x4
	m_iPawnArmor: 2364n, // int32_t m_iPawnArmor; |  0x93c | Schema_Builtin | Size: 0x4
	m_bPawnHasDefuser: 2368n, // bool m_bPawnHasDefuser; |  0x940 | Schema_Builtin | Size: 0x1
	m_bPawnHasHelmet: 2369n, // bool m_bPawnHasHelmet; |  0x941 | Schema_Builtin | Size: 0x1
	m_nPawnCharacterDefIndex: 2370n, // uint16_t m_nPawnCharacterDefIndex; |  0x942 | Schema_Builtin | Size: 0x2
	m_iPawnLifetimeStart: 2372n, // int32_t m_iPawnLifetimeStart; |  0x944 | Schema_Builtin | Size: 0x4
	m_iPawnLifetimeEnd: 2376n, // int32_t m_iPawnLifetimeEnd; |  0x948 | Schema_Builtin | Size: 0x4
	m_iPawnBotDifficulty: 2380n, // int32_t m_iPawnBotDifficulty; |  0x94c | Schema_Builtin | Size: 0x4
	m_hOriginalControllerOfCurrentPawn: 2384n, // GlobalTypes::CHandle<server::CCSPlayerController>  | Schema_Atomic | Size: 0x4
	m_iScore: 2388n, // int32_t m_iScore; |  0x954 | Schema_Builtin | Size: 0x4
	m_iRoundScore: 2392n, // int32_t m_iRoundScore; |  0x958 | Schema_Builtin | Size: 0x4
	m_iRoundsWon: 2396n, // int32_t m_iRoundsWon; |  0x95c | Schema_Builtin | Size: 0x4
	m_recentKillQueue: 2400n, // uint8_t m_recentKillQueue[8]; |  0x960 | Schema_FixedArray | Size: 0x8
	m_nFirstKill: 2408n, // uint8_t m_nFirstKill; |  0x968 | Schema_Builtin | Size: 0x1
	m_nKillCount: 2409n, // uint8_t m_nKillCount; |  0x969 | Schema_Builtin | Size: 0x1
	m_bMvpNoMusic: 2410n, // bool m_bMvpNoMusic; |  0x96a | Schema_Builtin | Size: 0x1
	m_eMvpReason: 2412n, // int32_t m_eMvpReason; |  0x96c | Schema_Builtin | Size: 0x4
	m_iMusicKitID: 2416n, // int32_t m_iMusicKitID; |  0x970 | Schema_Builtin | Size: 0x4
	m_iMusicKitMVPs: 2420n, // int32_t m_iMusicKitMVPs; |  0x974 | Schema_Builtin | Size: 0x4
	m_iMVPs: 2424n, // int32_t m_iMVPs; |  0x978 | Schema_Builtin | Size: 0x4
	m_nUpdateCounter: 2428n, // int32_t m_nUpdateCounter; |  0x97c | Schema_Builtin | Size: 0x4
	m_flSmoothedPing: 2432n, // float32 m_flSmoothedPing; |  0x980 | Schema_Builtin | Size: 0x4
	m_lastHeldVoteTimer: 2440n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_bShowHints: 2464n, // bool m_bShowHints; |  0x9a0 | Schema_Builtin | Size: 0x1
	m_iNextTimeCheck: 2468n, // int32_t m_iNextTimeCheck; |  0x9a4 | Schema_Builtin | Size: 0x4
	m_bJustDidTeamKill: 2472n, // bool m_bJustDidTeamKill; |  0x9a8 | Schema_Builtin | Size: 0x1
	m_bPunishForTeamKill: 2473n, // bool m_bPunishForTeamKill; |  0x9a9 | Schema_Builtin | Size: 0x1
	m_bGaveTeamDamageWarning: 2474n, // bool m_bGaveTeamDamageWarning; |  0x9aa | Schema_Builtin | Size: 0x1
	m_bGaveTeamDamageWarningThisRound: 2475n, // bool m_bGaveTeamDamageWarningThisRound; |  0x9ab | Schema_Builtin | Size: 0x1
	m_dblLastReceivedPacketPlatFloatTime: 2480n, // float64 m_dblLastReceivedPacketPlatFloatTime; |  0x9b0 | Schema_Builtin | Size: 0x8
	m_LastTeamDamageWarningTime: 2488n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_LastTimePlayerWasDisconnectedForPawnsRemove: 2492n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_nSuspiciousHitCount: 2496n, // uint32_t m_nSuspiciousHitCount; |  0x9c0 | Schema_Builtin | Size: 0x4
	m_nNonSuspiciousHitStreak: 2500n, // uint32_t m_nNonSuspiciousHitStreak; |  0x9c4 | Schema_Builtin | Size: 0x4
	m_bFireBulletsSeedSynchronized: 2665n, // bool m_bFireBulletsSeedSynchronized; |  0xa69 | Schema_Builtin | Size: 0x1
}
