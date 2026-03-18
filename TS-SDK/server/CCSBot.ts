// generated - do not edit!

import {server_CBot} from './CBot';
// Class size: 0x6E28
// BaseClass: : public CS2::server::CBot
export const server_CCSBot  = {
	...server_CBot,
	m_eyePosition: 264n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_name: 276n, // char m_name[64]; |  0x114 | Schema_FixedArray | Size: 0x40
	m_combatRange: 340n, // float32 m_combatRange; |  0x154 | Schema_Builtin | Size: 0x4
	m_isRogue: 344n, // bool m_isRogue; |  0x158 | Schema_Builtin | Size: 0x1
	m_rogueTimer: 352n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_diedLastRound: 380n, // bool m_diedLastRound; |  0x17c | Schema_Builtin | Size: 0x1
	m_safeTime: 384n, // float32 m_safeTime; |  0x180 | Schema_Builtin | Size: 0x4
	m_wasSafe: 388n, // bool m_wasSafe; |  0x184 | Schema_Builtin | Size: 0x1
	m_blindFire: 396n, // bool m_blindFire; |  0x18c | Schema_Builtin | Size: 0x1
	m_surpriseTimer: 400n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_bAllowActive: 424n, // bool m_bAllowActive; |  0x1a8 | Schema_Builtin | Size: 0x1
	m_isFollowing: 425n, // bool m_isFollowing; |  0x1a9 | Schema_Builtin | Size: 0x1
	m_leader: 428n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_followTimestamp: 432n, // float32 m_followTimestamp; |  0x1b0 | Schema_Builtin | Size: 0x4
	m_allowAutoFollowTime: 436n, // float32 m_allowAutoFollowTime; |  0x1b4 | Schema_Builtin | Size: 0x4
	m_hurryTimer: 440n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_alertTimer: 464n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_sneakTimer: 488n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_panicTimer: 512n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_stateTimestamp: 1448n, // float32 m_stateTimestamp; |  0x5a8 | Schema_Builtin | Size: 0x4
	m_isAttacking: 1452n, // bool m_isAttacking; |  0x5ac | Schema_Builtin | Size: 0x1
	m_isOpeningDoor: 1453n, // bool m_isOpeningDoor; |  0x5ad | Schema_Builtin | Size: 0x1
	m_taskEntity: 1460n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_goalPosition: 1476n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_goalEntity: 1488n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_avoid: 1492n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_avoidTimestamp: 1496n, // float32 m_avoidTimestamp; |  0x5d8 | Schema_Builtin | Size: 0x4
	m_isStopping: 1500n, // bool m_isStopping; |  0x5dc | Schema_Builtin | Size: 0x1
	m_hasVisitedEnemySpawn: 1501n, // bool m_hasVisitedEnemySpawn; |  0x5dd | Schema_Builtin | Size: 0x1
	m_stillTimer: 1504n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_bEyeAnglesUnderPathFinderControl: 1520n, // bool m_bEyeAnglesUnderPathFinderControl; |  0x5f0 | Schema_Builtin | Size: 0x1
	m_pathIndex: 24304n, // int32_t m_pathIndex; |  0x5ef0 | Schema_Builtin | Size: 0x4
	m_areaEnteredTimestamp: 24308n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_repathTimer: 24312n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_avoidFriendTimer: 24336n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isFriendInTheWay: 24360n, // bool m_isFriendInTheWay; |  0x5f28 | Schema_Builtin | Size: 0x1
	m_politeTimer: 24368n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isWaitingBehindFriend: 24392n, // bool m_isWaitingBehindFriend; |  0x5f48 | Schema_Builtin | Size: 0x1
	m_pathLadderEnd: 24436n, // float32 m_pathLadderEnd; |  0x5f74 | Schema_Builtin | Size: 0x4
	m_mustRunTimer: 24512n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_waitTimer: 24536n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_updateTravelDistanceTimer: 24560n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_playerTravelDistance: 24584n, // float32 m_playerTravelDistance[64]; |  0x6008 | Schema_FixedArray | Size: 0x100
	m_travelDistancePhase: 24840n, // uint8_t m_travelDistancePhase; |  0x6108 | Schema_Builtin | Size: 0x1
	m_hostageEscortCount: 25248n, // uint8_t m_hostageEscortCount; |  0x62a0 | Schema_Builtin | Size: 0x1
	m_hostageEscortCountTimestamp: 25252n, // float32 m_hostageEscortCountTimestamp; |  0x62a4 | Schema_Builtin | Size: 0x4
	m_desiredTeam: 25256n, // int32_t m_desiredTeam; |  0x62a8 | Schema_Builtin | Size: 0x4
	m_hasJoined: 25260n, // bool m_hasJoined; |  0x62ac | Schema_Builtin | Size: 0x1
	m_isWaitingForHostage: 25261n, // bool m_isWaitingForHostage; |  0x62ad | Schema_Builtin | Size: 0x1
	m_inhibitWaitingForHostageTimer: 25264n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_waitForHostageTimer: 25288n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_noisePosition: 25312n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_noiseTravelDistance: 25324n, // float32 m_noiseTravelDistance; |  0x62ec | Schema_Builtin | Size: 0x4
	m_noiseTimestamp: 25328n, // float32 m_noiseTimestamp; |  0x62f0 | Schema_Builtin | Size: 0x4
	m_noiseSource: 25336n, // server::CCSPlayerPawn**  | Schema_Ptr | Size: 0x8
	m_noiseBendTimer: 25360n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_bentNoisePosition: 25384n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bendNoisePositionValid: 25396n, // bool m_bendNoisePositionValid; |  0x6334 | Schema_Builtin | Size: 0x1
	m_lookAroundStateTimestamp: 25400n, // float32 m_lookAroundStateTimestamp; |  0x6338 | Schema_Builtin | Size: 0x4
	m_lookAheadAngle: 25404n, // float32 m_lookAheadAngle; |  0x633c | Schema_Builtin | Size: 0x4
	m_lookUpAngle: 25408n, // float32 m_lookUpAngle; |  0x6340 | Schema_Builtin | Size: 0x4
	m_forwardAngle: 25412n, // float32 m_forwardAngle; |  0x6344 | Schema_Builtin | Size: 0x4
	m_inhibitLookAroundTimestamp: 25416n, // float32 m_inhibitLookAroundTimestamp; |  0x6348 | Schema_Builtin | Size: 0x4
	m_lookAtSpot: 25424n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lookAtSpotDuration: 25440n, // float32 m_lookAtSpotDuration; |  0x6360 | Schema_Builtin | Size: 0x4
	m_lookAtSpotTimestamp: 25444n, // float32 m_lookAtSpotTimestamp; |  0x6364 | Schema_Builtin | Size: 0x4
	m_lookAtSpotAngleTolerance: 25448n, // float32 m_lookAtSpotAngleTolerance; |  0x6368 | Schema_Builtin | Size: 0x4
	m_lookAtSpotClearIfClose: 25452n, // bool m_lookAtSpotClearIfClose; |  0x636c | Schema_Builtin | Size: 0x1
	m_lookAtSpotAttack: 25453n, // bool m_lookAtSpotAttack; |  0x636d | Schema_Builtin | Size: 0x1
	m_lookAtDesc: 25456n, // char* m_lookAtDesc; |  0x6370 | Schema_Ptr | Size: 0x8
	m_peripheralTimestamp: 25464n, // float32 m_peripheralTimestamp; |  0x6378 | Schema_Builtin | Size: 0x4
	m_approachPointCount: 25856n, // uint8_t m_approachPointCount; |  0x6500 | Schema_Builtin | Size: 0x1
	m_approachPointViewPosition: 25860n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_viewSteadyTimer: 25872n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_tossGrenadeTimer: 25896n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isAvoidingGrenade: 25928n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_spotCheckTimestamp: 25960n, // float32 m_spotCheckTimestamp; |  0x6568 | Schema_Builtin | Size: 0x4
	m_checkedHidingSpotCount: 26992n, // int32_t m_checkedHidingSpotCount; |  0x6970 | Schema_Builtin | Size: 0x4
	m_lookPitch: 26996n, // float32 m_lookPitch; |  0x6974 | Schema_Builtin | Size: 0x4
	m_lookPitchVel: 27000n, // float32 m_lookPitchVel; |  0x6978 | Schema_Builtin | Size: 0x4
	m_lookYaw: 27004n, // float32 m_lookYaw; |  0x697c | Schema_Builtin | Size: 0x4
	m_lookYawVel: 27008n, // float32 m_lookYawVel; |  0x6980 | Schema_Builtin | Size: 0x4
	m_targetSpot: 27012n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_targetSpotVelocity: 27024n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_targetSpotPredicted: 27036n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_aimError: 27048n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_aimGoal: 27060n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_targetSpotTime: 27072n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_aimFocus: 27076n, // float32 m_aimFocus; |  0x69c4 | Schema_Builtin | Size: 0x4
	m_aimFocusInterval: 27080n, // float32 m_aimFocusInterval; |  0x69c8 | Schema_Builtin | Size: 0x4
	m_aimFocusNextUpdate: 27084n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_ignoreEnemiesTimer: 27096n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_enemy: 27120n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_isEnemyVisible: 27124n, // bool m_isEnemyVisible; |  0x69f4 | Schema_Builtin | Size: 0x1
	m_visibleEnemyParts: 27125n, // uint8_t m_visibleEnemyParts; |  0x69f5 | Schema_Builtin | Size: 0x1
	m_lastEnemyPosition: 27128n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lastSawEnemyTimestamp: 27140n, // float32 m_lastSawEnemyTimestamp; |  0x6a04 | Schema_Builtin | Size: 0x4
	m_firstSawEnemyTimestamp: 27144n, // float32 m_firstSawEnemyTimestamp; |  0x6a08 | Schema_Builtin | Size: 0x4
	m_currentEnemyAcquireTimestamp: 27148n, // float32 m_currentEnemyAcquireTimestamp; |  0x6a0c | Schema_Builtin | Size: 0x4
	m_enemyDeathTimestamp: 27152n, // float32 m_enemyDeathTimestamp; |  0x6a10 | Schema_Builtin | Size: 0x4
	m_friendDeathTimestamp: 27156n, // float32 m_friendDeathTimestamp; |  0x6a14 | Schema_Builtin | Size: 0x4
	m_isLastEnemyDead: 27160n, // bool m_isLastEnemyDead; |  0x6a18 | Schema_Builtin | Size: 0x1
	m_nearbyEnemyCount: 27164n, // int32_t m_nearbyEnemyCount; |  0x6a1c | Schema_Builtin | Size: 0x4
	m_bomber: 27688n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_nearbyFriendCount: 27692n, // int32_t m_nearbyFriendCount; |  0x6c2c | Schema_Builtin | Size: 0x4
	m_closestVisibleFriend: 27696n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_closestVisibleHumanFriend: 27700n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_attentionInterval: 27704n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_attacker: 27720n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_attackedTimestamp: 27724n, // float32 m_attackedTimestamp; |  0x6c4c | Schema_Builtin | Size: 0x4
	m_burnedByFlamesTimer: 27728n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_lastVictimID: 27744n, // int32_t m_lastVictimID; |  0x6c60 | Schema_Builtin | Size: 0x4
	m_isAimingAtEnemy: 27748n, // bool m_isAimingAtEnemy; |  0x6c64 | Schema_Builtin | Size: 0x1
	m_isRapidFiring: 27749n, // bool m_isRapidFiring; |  0x6c65 | Schema_Builtin | Size: 0x1
	m_equipTimer: 27752n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_zoomTimer: 27768n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_fireWeaponTimestamp: 27792n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_lookForWeaponsOnGroundTimer: 27800n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_bIsSleeping: 27824n, // bool m_bIsSleeping; |  0x6cb0 | Schema_Builtin | Size: 0x1
	m_isEnemySniperVisible: 27825n, // bool m_isEnemySniperVisible; |  0x6cb1 | Schema_Builtin | Size: 0x1
	m_sawEnemySniperTimer: 27832n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_enemyQueueIndex: 28016n, // uint8_t m_enemyQueueIndex; |  0x6d70 | Schema_Builtin | Size: 0x1
	m_enemyQueueCount: 28017n, // uint8_t m_enemyQueueCount; |  0x6d71 | Schema_Builtin | Size: 0x1
	m_enemyQueueAttendIndex: 28018n, // uint8_t m_enemyQueueAttendIndex; |  0x6d72 | Schema_Builtin | Size: 0x1
	m_isStuck: 28019n, // bool m_isStuck; |  0x6d73 | Schema_Builtin | Size: 0x1
	m_stuckTimestamp: 28020n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_stuckSpot: 28024n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_wiggleTimer: 28040n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_stuckJumpTimer: 28064n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_nextCleanupCheckTimestamp: 28088n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_avgVel: 28092n, // float32 m_avgVel[10]; |  0x6dbc | Schema_FixedArray | Size: 0x28
	m_avgVelIndex: 28132n, // int32_t m_avgVelIndex; |  0x6de4 | Schema_Builtin | Size: 0x4
	m_avgVelCount: 28136n, // int32_t m_avgVelCount; |  0x6de8 | Schema_Builtin | Size: 0x4
	m_lastOrigin: 28140n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lastRadioRecievedTimestamp: 28156n, // float32 m_lastRadioRecievedTimestamp; |  0x6dfc | Schema_Builtin | Size: 0x4
	m_lastRadioSentTimestamp: 28160n, // float32 m_lastRadioSentTimestamp; |  0x6e00 | Schema_Builtin | Size: 0x4
	m_radioSubject: 28164n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_radioPosition: 28168n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_voiceEndTimestamp: 28180n, // float32 m_voiceEndTimestamp; |  0x6e14 | Schema_Builtin | Size: 0x4
	m_lastValidReactionQueueFrame: 28192n, // int32_t m_lastValidReactionQueueFrame; |  0x6e20 | Schema_Builtin | Size: 0x4
}
