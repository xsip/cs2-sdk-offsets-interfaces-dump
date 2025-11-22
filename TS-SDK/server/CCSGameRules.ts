// generated - do not edit!

import {server_CTeamplayRules} from './CTeamplayRules';
// Class size: 0x11430
// BaseClass: : public CS2::server::CTeamplayRules
export const server_CCSGameRules  = {
	...server_CTeamplayRules,
	m_bFreezePeriod: 200n, // bool m_bFreezePeriod; |  0xc8 | Schema_Builtin | Size: 0x1
	m_bWarmupPeriod: 201n, // bool m_bWarmupPeriod; |  0xc9 | Schema_Builtin | Size: 0x1
	m_fWarmupPeriodEnd: 204n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fWarmupPeriodStart: 208n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bTerroristTimeOutActive: 212n, // bool m_bTerroristTimeOutActive; |  0xd4 | Schema_Builtin | Size: 0x1
	m_bCTTimeOutActive: 213n, // bool m_bCTTimeOutActive; |  0xd5 | Schema_Builtin | Size: 0x1
	m_flTerroristTimeOutRemaining: 216n, // float32 m_flTerroristTimeOutRemaining; |  0xd8 | Schema_Builtin | Size: 0x4
	m_flCTTimeOutRemaining: 220n, // float32 m_flCTTimeOutRemaining; |  0xdc | Schema_Builtin | Size: 0x4
	m_nTerroristTimeOuts: 224n, // int32_t m_nTerroristTimeOuts; |  0xe0 | Schema_Builtin | Size: 0x4
	m_nCTTimeOuts: 228n, // int32_t m_nCTTimeOuts; |  0xe4 | Schema_Builtin | Size: 0x4
	m_bTechnicalTimeOut: 232n, // bool m_bTechnicalTimeOut; |  0xe8 | Schema_Builtin | Size: 0x1
	m_bMatchWaitingForResume: 233n, // bool m_bMatchWaitingForResume; |  0xe9 | Schema_Builtin | Size: 0x1
	m_iFreezeTime: 236n, // int32_t m_iFreezeTime; |  0xec | Schema_Builtin | Size: 0x4
	m_iRoundTime: 240n, // int32_t m_iRoundTime; |  0xf0 | Schema_Builtin | Size: 0x4
	m_fMatchStartTime: 244n, // float32 m_fMatchStartTime; |  0xf4 | Schema_Builtin | Size: 0x4
	m_fRoundStartTime: 248n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flRestartRoundTime: 252n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bGameRestart: 256n, // bool m_bGameRestart; |  0x100 | Schema_Builtin | Size: 0x1
	m_flGameStartTime: 260n, // float32 m_flGameStartTime; |  0x104 | Schema_Builtin | Size: 0x4
	m_timeUntilNextPhaseStarts: 264n, // float32 m_timeUntilNextPhaseStarts; |  0x108 | Schema_Builtin | Size: 0x4
	m_gamePhase: 268n, // int32_t m_gamePhase; |  0x10c | Schema_Builtin | Size: 0x4
	m_totalRoundsPlayed: 272n, // int32_t m_totalRoundsPlayed; |  0x110 | Schema_Builtin | Size: 0x4
	m_nRoundsPlayedThisPhase: 276n, // int32_t m_nRoundsPlayedThisPhase; |  0x114 | Schema_Builtin | Size: 0x4
	m_nOvertimePlaying: 280n, // int32_t m_nOvertimePlaying; |  0x118 | Schema_Builtin | Size: 0x4
	m_iHostagesRemaining: 284n, // int32_t m_iHostagesRemaining; |  0x11c | Schema_Builtin | Size: 0x4
	m_bAnyHostageReached: 288n, // bool m_bAnyHostageReached; |  0x120 | Schema_Builtin | Size: 0x1
	m_bMapHasBombTarget: 289n, // bool m_bMapHasBombTarget; |  0x121 | Schema_Builtin | Size: 0x1
	m_bMapHasRescueZone: 290n, // bool m_bMapHasRescueZone; |  0x122 | Schema_Builtin | Size: 0x1
	m_bMapHasBuyZone: 291n, // bool m_bMapHasBuyZone; |  0x123 | Schema_Builtin | Size: 0x1
	m_bIsQueuedMatchmaking: 292n, // bool m_bIsQueuedMatchmaking; |  0x124 | Schema_Builtin | Size: 0x1
	m_nQueuedMatchmakingMode: 296n, // int32_t m_nQueuedMatchmakingMode; |  0x128 | Schema_Builtin | Size: 0x4
	m_bIsValveDS: 300n, // bool m_bIsValveDS; |  0x12c | Schema_Builtin | Size: 0x1
	m_bLogoMap: 301n, // bool m_bLogoMap; |  0x12d | Schema_Builtin | Size: 0x1
	m_bPlayAllStepSoundsOnServer: 302n, // bool m_bPlayAllStepSoundsOnServer; |  0x12e | Schema_Builtin | Size: 0x1
	m_iSpectatorSlotCount: 304n, // int32_t m_iSpectatorSlotCount; |  0x130 | Schema_Builtin | Size: 0x4
	m_MatchDevice: 308n, // int32_t m_MatchDevice; |  0x134 | Schema_Builtin | Size: 0x4
	m_bHasMatchStarted: 312n, // bool m_bHasMatchStarted; |  0x138 | Schema_Builtin | Size: 0x1
	m_nNextMapInMapgroup: 316n, // int32_t m_nNextMapInMapgroup; |  0x13c | Schema_Builtin | Size: 0x4
	m_szTournamentEventName: 320n, // char m_szTournamentEventName[512]; |  0x140 | Schema_FixedArray | Size: 0x200
	m_szTournamentEventStage: 832n, // char m_szTournamentEventStage[512]; |  0x340 | Schema_FixedArray | Size: 0x200
	m_szMatchStatTxt: 1344n, // char m_szMatchStatTxt[512]; |  0x540 | Schema_FixedArray | Size: 0x200
	m_szTournamentPredictionsTxt: 1856n, // char m_szTournamentPredictionsTxt[512]; |  0x740 | Schema_FixedArray | Size: 0x200
	m_nTournamentPredictionsPct: 2368n, // int32_t m_nTournamentPredictionsPct; |  0x940 | Schema_Builtin | Size: 0x4
	m_flCMMItemDropRevealStartTime: 2372n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flCMMItemDropRevealEndTime: 2376n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bIsDroppingItems: 2380n, // bool m_bIsDroppingItems; |  0x94c | Schema_Builtin | Size: 0x1
	m_bIsQuestEligible: 2381n, // bool m_bIsQuestEligible; |  0x94d | Schema_Builtin | Size: 0x1
	m_bIsHltvActive: 2382n, // bool m_bIsHltvActive; |  0x94e | Schema_Builtin | Size: 0x1
	m_arrProhibitedItemIndices: 2384n, // uint16_t m_arrProhibitedItemIndices[100]; |  0x950 | Schema_FixedArray | Size: 0xc8
	m_arrTournamentActiveCasterAccounts: 2584n, // uint32_t m_arrTournamentActiveCasterAccounts[4]; |  0xa18 | Schema_FixedArray | Size: 0x10
	m_numBestOfMaps: 2600n, // int32_t m_numBestOfMaps; |  0xa28 | Schema_Builtin | Size: 0x4
	m_nHalloweenMaskListSeed: 2604n, // int32_t m_nHalloweenMaskListSeed; |  0xa2c | Schema_Builtin | Size: 0x4
	m_bBombDropped: 2608n, // bool m_bBombDropped; |  0xa30 | Schema_Builtin | Size: 0x1
	m_bBombPlanted: 2609n, // bool m_bBombPlanted; |  0xa31 | Schema_Builtin | Size: 0x1
	m_iRoundWinStatus: 2612n, // int32_t m_iRoundWinStatus; |  0xa34 | Schema_Builtin | Size: 0x4
	m_eRoundWinReason: 2616n, // int32_t m_eRoundWinReason; |  0xa38 | Schema_Builtin | Size: 0x4
	m_bTCantBuy: 2620n, // bool m_bTCantBuy; |  0xa3c | Schema_Builtin | Size: 0x1
	m_bCTCantBuy: 2621n, // bool m_bCTCantBuy; |  0xa3d | Schema_Builtin | Size: 0x1
	m_iMatchStats_RoundResults: 2624n, // int32_t m_iMatchStats_RoundResults[30]; |  0xa40 | Schema_FixedArray | Size: 0x78
	m_iMatchStats_PlayersAlive_CT: 2744n, // int32_t m_iMatchStats_PlayersAlive_CT[30]; |  0xab8 | Schema_FixedArray | Size: 0x78
	m_iMatchStats_PlayersAlive_T: 2864n, // int32_t m_iMatchStats_PlayersAlive_T[30]; |  0xb30 | Schema_FixedArray | Size: 0x78
	m_TeamRespawnWaveTimes: 2984n, // float32 m_TeamRespawnWaveTimes[32]; |  0xba8 | Schema_FixedArray | Size: 0x80
	m_flNextRespawnWave: 3112n, // GlobalTypes::GameTime_t[32]  | Schema_FixedArray | Size: 0x1000
	m_vMinimapMins: 3240n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vMinimapMaxs: 3252n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_MinimapVerticalSectionHeights: 3264n, // float32 m_MinimapVerticalSectionHeights[8]; |  0xcc0 | Schema_FixedArray | Size: 0x20
	m_ullLocalMatchID: 3296n, // uint64_t m_ullLocalMatchID; |  0xce0 | Schema_Builtin | Size: 0x8
	m_nEndMatchMapGroupVoteTypes: 3304n, // int32_t m_nEndMatchMapGroupVoteTypes[10]; |  0xce8 | Schema_FixedArray | Size: 0x28
	m_nEndMatchMapGroupVoteOptions: 3344n, // int32_t m_nEndMatchMapGroupVoteOptions[10]; |  0xd10 | Schema_FixedArray | Size: 0x28
	m_nEndMatchMapVoteWinner: 3384n, // int32_t m_nEndMatchMapVoteWinner; |  0xd38 | Schema_Builtin | Size: 0x4
	m_iNumConsecutiveCTLoses: 3388n, // int32_t m_iNumConsecutiveCTLoses; |  0xd3c | Schema_Builtin | Size: 0x4
	m_iNumConsecutiveTerroristLoses: 3392n, // int32_t m_iNumConsecutiveTerroristLoses; |  0xd40 | Schema_Builtin | Size: 0x4
	m_bHasHostageBeenTouched: 3424n, // bool m_bHasHostageBeenTouched; |  0xd60 | Schema_Builtin | Size: 0x1
	m_flIntermissionStartTime: 3428n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flIntermissionEndTime: 3432n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bLevelInitialized: 3436n, // bool m_bLevelInitialized; |  0xd6c | Schema_Builtin | Size: 0x1
	m_iTotalRoundsPlayed: 3440n, // int32_t m_iTotalRoundsPlayed; |  0xd70 | Schema_Builtin | Size: 0x4
	m_iUnBalancedRounds: 3444n, // int32_t m_iUnBalancedRounds; |  0xd74 | Schema_Builtin | Size: 0x4
	m_endMatchOnRoundReset: 3448n, // bool m_endMatchOnRoundReset; |  0xd78 | Schema_Builtin | Size: 0x1
	m_endMatchOnThink: 3449n, // bool m_endMatchOnThink; |  0xd79 | Schema_Builtin | Size: 0x1
	m_iNumTerrorist: 3452n, // int32_t m_iNumTerrorist; |  0xd7c | Schema_Builtin | Size: 0x4
	m_iNumCT: 3456n, // int32_t m_iNumCT; |  0xd80 | Schema_Builtin | Size: 0x4
	m_iNumSpawnableTerrorist: 3460n, // int32_t m_iNumSpawnableTerrorist; |  0xd84 | Schema_Builtin | Size: 0x4
	m_iNumSpawnableCT: 3464n, // int32_t m_iNumSpawnableCT; |  0xd88 | Schema_Builtin | Size: 0x4
	m_arrSelectedHostageSpawnIndices: 3472n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_nSpawnPointsRandomSeed: 3496n, // int32_t m_nSpawnPointsRandomSeed; |  0xda8 | Schema_Builtin | Size: 0x4
	m_bFirstConnected: 3500n, // bool m_bFirstConnected; |  0xdac | Schema_Builtin | Size: 0x1
	m_bCompleteReset: 3501n, // bool m_bCompleteReset; |  0xdad | Schema_Builtin | Size: 0x1
	m_bPickNewTeamsOnReset: 3502n, // bool m_bPickNewTeamsOnReset; |  0xdae | Schema_Builtin | Size: 0x1
	m_bScrambleTeamsOnRestart: 3503n, // bool m_bScrambleTeamsOnRestart; |  0xdaf | Schema_Builtin | Size: 0x1
	m_bSwapTeamsOnRestart: 3504n, // bool m_bSwapTeamsOnRestart; |  0xdb0 | Schema_Builtin | Size: 0x1
	m_nEndMatchTiedVotes: 3512n, // GlobalTypes::CUtlVector  | Schema_Atomic | Size: 0x18
	m_bNeedToAskPlayersForContinueVote: 3540n, // bool m_bNeedToAskPlayersForContinueVote; |  0xdd4 | Schema_Builtin | Size: 0x1
	m_numQueuedMatchmakingAccounts: 3544n, // uint32_t m_numQueuedMatchmakingAccounts; |  0xdd8 | Schema_Builtin | Size: 0x4
	m_fAvgPlayerRank: 3548n, // float32 m_fAvgPlayerRank; |  0xddc | Schema_Builtin | Size: 0x4
	m_pQueuedMatchmakingReservationString: 3552n, // char* m_pQueuedMatchmakingReservationString; |  0xde0 | Schema_Ptr | Size: 0x8
	m_numTotalTournamentDrops: 3560n, // uint32_t m_numTotalTournamentDrops; |  0xde8 | Schema_Builtin | Size: 0x4
	m_numSpectatorsCountMax: 3564n, // uint32_t m_numSpectatorsCountMax; |  0xdec | Schema_Builtin | Size: 0x4
	m_numSpectatorsCountMaxTV: 3568n, // uint32_t m_numSpectatorsCountMaxTV; |  0xdf0 | Schema_Builtin | Size: 0x4
	m_numSpectatorsCountMaxLnk: 3572n, // uint32_t m_numSpectatorsCountMaxLnk; |  0xdf4 | Schema_Builtin | Size: 0x4
	m_nCTsAliveAtFreezetimeEnd: 3584n, // int32_t m_nCTsAliveAtFreezetimeEnd; |  0xe00 | Schema_Builtin | Size: 0x4
	m_nTerroristsAliveAtFreezetimeEnd: 3588n, // int32_t m_nTerroristsAliveAtFreezetimeEnd; |  0xe04 | Schema_Builtin | Size: 0x4
	m_bForceTeamChangeSilent: 3592n, // bool m_bForceTeamChangeSilent; |  0xe08 | Schema_Builtin | Size: 0x1
	m_bLoadingRoundBackupData: 3593n, // bool m_bLoadingRoundBackupData; |  0xe09 | Schema_Builtin | Size: 0x1
	m_nMatchInfoShowType: 3648n, // int32_t m_nMatchInfoShowType; |  0xe40 | Schema_Builtin | Size: 0x4
	m_flMatchInfoDecidedTime: 3652n, // float32 m_flMatchInfoDecidedTime; |  0xe44 | Schema_Builtin | Size: 0x4
	mTeamDMLastWinningTeamNumber: 3680n, // int32_t mTeamDMLastWinningTeamNumber; |  0xe60 | Schema_Builtin | Size: 0x4
	mTeamDMLastThinkTime: 3684n, // float32 mTeamDMLastThinkTime; |  0xe64 | Schema_Builtin | Size: 0x4
	m_flTeamDMLastAnnouncementTime: 3688n, // float32 m_flTeamDMLastAnnouncementTime; |  0xe68 | Schema_Builtin | Size: 0x4
	m_iAccountTerrorist: 3692n, // int32_t m_iAccountTerrorist; |  0xe6c | Schema_Builtin | Size: 0x4
	m_iAccountCT: 3696n, // int32_t m_iAccountCT; |  0xe70 | Schema_Builtin | Size: 0x4
	m_iSpawnPointCount_Terrorist: 3700n, // int32_t m_iSpawnPointCount_Terrorist; |  0xe74 | Schema_Builtin | Size: 0x4
	m_iSpawnPointCount_CT: 3704n, // int32_t m_iSpawnPointCount_CT; |  0xe78 | Schema_Builtin | Size: 0x4
	m_iMaxNumTerrorists: 3708n, // int32_t m_iMaxNumTerrorists; |  0xe7c | Schema_Builtin | Size: 0x4
	m_iMaxNumCTs: 3712n, // int32_t m_iMaxNumCTs; |  0xe80 | Schema_Builtin | Size: 0x4
	m_iLoserBonusMostRecentTeam: 3716n, // int32_t m_iLoserBonusMostRecentTeam; |  0xe84 | Schema_Builtin | Size: 0x4
	m_tmNextPeriodicThink: 3720n, // float32 m_tmNextPeriodicThink; |  0xe88 | Schema_Builtin | Size: 0x4
	m_bVoiceWonMatchBragFired: 3724n, // bool m_bVoiceWonMatchBragFired; |  0xe8c | Schema_Builtin | Size: 0x1
	m_fWarmupNextChatNoticeTime: 3728n, // float32 m_fWarmupNextChatNoticeTime; |  0xe90 | Schema_Builtin | Size: 0x4
	m_iHostagesRescued: 3736n, // int32_t m_iHostagesRescued; |  0xe98 | Schema_Builtin | Size: 0x4
	m_iHostagesTouched: 3740n, // int32_t m_iHostagesTouched; |  0xe9c | Schema_Builtin | Size: 0x4
	m_flNextHostageAnnouncement: 3744n, // float32 m_flNextHostageAnnouncement; |  0xea0 | Schema_Builtin | Size: 0x4
	m_bNoTerroristsKilled: 3748n, // bool m_bNoTerroristsKilled; |  0xea4 | Schema_Builtin | Size: 0x1
	m_bNoCTsKilled: 3749n, // bool m_bNoCTsKilled; |  0xea5 | Schema_Builtin | Size: 0x1
	m_bNoEnemiesKilled: 3750n, // bool m_bNoEnemiesKilled; |  0xea6 | Schema_Builtin | Size: 0x1
	m_bCanDonateWeapons: 3751n, // bool m_bCanDonateWeapons; |  0xea7 | Schema_Builtin | Size: 0x1
	m_firstKillTime: 3756n, // float32 m_firstKillTime; |  0xeac | Schema_Builtin | Size: 0x4
	m_firstBloodTime: 3764n, // float32 m_firstBloodTime; |  0xeb4 | Schema_Builtin | Size: 0x4
	m_hostageWasInjured: 3792n, // bool m_hostageWasInjured; |  0xed0 | Schema_Builtin | Size: 0x1
	m_hostageWasKilled: 3793n, // bool m_hostageWasKilled; |  0xed1 | Schema_Builtin | Size: 0x1
	m_bVoteCalled: 3808n, // bool m_bVoteCalled; |  0xee0 | Schema_Builtin | Size: 0x1
	m_bServerVoteOnReset: 3809n, // bool m_bServerVoteOnReset; |  0xee1 | Schema_Builtin | Size: 0x1
	m_flVoteCheckThrottle: 3812n, // float32 m_flVoteCheckThrottle; |  0xee4 | Schema_Builtin | Size: 0x4
	m_bBuyTimeEnded: 3816n, // bool m_bBuyTimeEnded; |  0xee8 | Schema_Builtin | Size: 0x1
	m_nLastFreezeEndBeep: 3820n, // int32_t m_nLastFreezeEndBeep; |  0xeec | Schema_Builtin | Size: 0x4
	m_bTargetBombed: 3824n, // bool m_bTargetBombed; |  0xef0 | Schema_Builtin | Size: 0x1
	m_bBombDefused: 3825n, // bool m_bBombDefused; |  0xef1 | Schema_Builtin | Size: 0x1
	m_bMapHasBombZone: 3826n, // bool m_bMapHasBombZone; |  0xef2 | Schema_Builtin | Size: 0x1
	m_vecMainCTSpawnPos: 3904n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_CTSpawnPointsMasterList: 3920n, // server::CUtlVector<server::SpawnPoint*>  | Schema_Atomic | Size: 0x18
	m_TerroristSpawnPointsMasterList: 3944n, // server::CUtlVector<server::SpawnPoint*>  | Schema_Atomic | Size: 0x18
	m_bRespawningAllRespawnablePlayers: 3968n, // bool m_bRespawningAllRespawnablePlayers; |  0xf80 | Schema_Builtin | Size: 0x1
	m_iNextCTSpawnPoint: 3972n, // int32_t m_iNextCTSpawnPoint; |  0xf84 | Schema_Builtin | Size: 0x4
	m_flCTSpawnPointUsedTime: 3976n, // float32 m_flCTSpawnPointUsedTime; |  0xf88 | Schema_Builtin | Size: 0x4
	m_iNextTerroristSpawnPoint: 3980n, // int32_t m_iNextTerroristSpawnPoint; |  0xf8c | Schema_Builtin | Size: 0x4
	m_flTerroristSpawnPointUsedTime: 3984n, // float32 m_flTerroristSpawnPointUsedTime; |  0xf90 | Schema_Builtin | Size: 0x4
	m_CTSpawnPoints: 3992n, // server::CUtlVector<server::SpawnPoint*>  | Schema_Atomic | Size: 0x18
	m_TerroristSpawnPoints: 4016n, // server::CUtlVector<server::SpawnPoint*>  | Schema_Atomic | Size: 0x18
	m_bIsUnreservedGameServer: 4040n, // bool m_bIsUnreservedGameServer; |  0xfc8 | Schema_Builtin | Size: 0x1
	m_fAutobalanceDisplayTime: 4044n, // float32 m_fAutobalanceDisplayTime; |  0xfcc | Schema_Builtin | Size: 0x4
	m_bAllowWeaponSwitch: 4104n, // bool m_bAllowWeaponSwitch; |  0x1008 | Schema_Builtin | Size: 0x1
	m_bRoundTimeWarningTriggered: 4105n, // bool m_bRoundTimeWarningTriggered; |  0x1009 | Schema_Builtin | Size: 0x1
	m_phaseChangeAnnouncementTime: 4108n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fNextUpdateTeamClanNamesTime: 4112n, // float32 m_fNextUpdateTeamClanNamesTime; |  0x1010 | Schema_Builtin | Size: 0x4
	m_flLastThinkTime: 4116n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_fAccumulatedRoundOffDamage: 4120n, // float32 m_fAccumulatedRoundOffDamage; |  0x1018 | Schema_Builtin | Size: 0x4
	m_nShorthandedBonusLastEvalRound: 4124n, // int32_t m_nShorthandedBonusLastEvalRound; |  0x101c | Schema_Builtin | Size: 0x4
	m_nMatchAbortedEarlyReason: 4200n, // int32_t m_nMatchAbortedEarlyReason; |  0x1068 | Schema_Builtin | Size: 0x4
	m_bHasTriggeredRoundStartMusic: 4204n, // bool m_bHasTriggeredRoundStartMusic; |  0x106c | Schema_Builtin | Size: 0x1
	m_bSwitchingTeamsAtRoundReset: 4205n, // bool m_bSwitchingTeamsAtRoundReset; |  0x106d | Schema_Builtin | Size: 0x1
	m_pGameModeRules: 4232n, // server::CCSGameModeRules**  | Schema_Ptr | Size: 0x8
	m_BtGlobalBlackboard: 4240n, // GlobalTypes::KeyValues3  | Schema_Atomic | Size: 0x10
	m_hPlayerResource: 4392n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_RetakeRules: 4400n, // server::CRetakeGameRules  | Schema_DeclaredClass | Size: 0x1f0
	m_arrTeamUniqueKillWeaponsMatch: 4896n, // GlobalTypes::CUtlVector  | Schema_FixedArray | Size: 0x60
	m_bTeamLastKillUsedUniqueWeaponMatch: 4992n, // bool m_bTeamLastKillUsedUniqueWeaponMatch[4]; |  0x1380 | Schema_FixedArray | Size: 0x4
	m_nMatchEndCount: 5032n, // uint8_t m_nMatchEndCount; |  0x13a8 | Schema_Builtin | Size: 0x1
	m_nTTeamIntroVariant: 5036n, // int32_t m_nTTeamIntroVariant; |  0x13ac | Schema_Builtin | Size: 0x4
	m_nCTTeamIntroVariant: 5040n, // int32_t m_nCTTeamIntroVariant; |  0x13b0 | Schema_Builtin | Size: 0x4
	m_bTeamIntroPeriod: 5044n, // bool m_bTeamIntroPeriod; |  0x13b4 | Schema_Builtin | Size: 0x1
	m_fTeamIntroPeriodEnd: 5048n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bPlayedTeamIntroVO: 5052n, // bool m_bPlayedTeamIntroVO; |  0x13bc | Schema_Builtin | Size: 0x1
	m_iRoundEndWinnerTeam: 5056n, // int32_t m_iRoundEndWinnerTeam; |  0x13c0 | Schema_Builtin | Size: 0x4
	m_eRoundEndReason: 5060n, // int32_t m_eRoundEndReason; |  0x13c4 | Schema_Builtin | Size: 0x4
	m_bRoundEndShowTimerDefend: 5064n, // bool m_bRoundEndShowTimerDefend; |  0x13c8 | Schema_Builtin | Size: 0x1
	m_iRoundEndTimerTime: 5068n, // int32_t m_iRoundEndTimerTime; |  0x13cc | Schema_Builtin | Size: 0x4
	m_sRoundEndFunFactToken: 5072n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_iRoundEndFunFactPlayerSlot: 5080n, // GlobalTypes::CPlayerSlot  | Schema_Atomic | Size: 0x4
	m_iRoundEndFunFactData1: 5084n, // int32_t m_iRoundEndFunFactData1; |  0x13dc | Schema_Builtin | Size: 0x4
	m_iRoundEndFunFactData2: 5088n, // int32_t m_iRoundEndFunFactData2; |  0x13e0 | Schema_Builtin | Size: 0x4
	m_iRoundEndFunFactData3: 5092n, // int32_t m_iRoundEndFunFactData3; |  0x13e4 | Schema_Builtin | Size: 0x4
	m_sRoundEndMessage: 5096n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_iRoundEndPlayerCount: 5104n, // int32_t m_iRoundEndPlayerCount; |  0x13f0 | Schema_Builtin | Size: 0x4
	m_bRoundEndNoMusic: 5108n, // bool m_bRoundEndNoMusic; |  0x13f4 | Schema_Builtin | Size: 0x1
	m_iRoundEndLegacy: 5112n, // int32_t m_iRoundEndLegacy; |  0x13f8 | Schema_Builtin | Size: 0x4
	m_nRoundEndCount: 5116n, // uint8_t m_nRoundEndCount; |  0x13fc | Schema_Builtin | Size: 0x1
	m_iRoundStartRoundNumber: 5120n, // int32_t m_iRoundStartRoundNumber; |  0x1400 | Schema_Builtin | Size: 0x4
	m_nRoundStartCount: 5124n, // uint8_t m_nRoundStartCount; |  0x1404 | Schema_Builtin | Size: 0x1
	m_flLastPerfSampleTime: 21520n, // float64 m_flLastPerfSampleTime; |  0x5410 | Schema_Builtin | Size: 0x8
}
