// generated - do not edit!

import {server_CBot} from './CBot';
// Class size: 0x6E18
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
	m_stateTimestamp: 1432n, // float32 m_stateTimestamp; |  0x598 | Schema_Builtin | Size: 0x4
	m_isAttacking: 1436n, // bool m_isAttacking; |  0x59c | Schema_Builtin | Size: 0x1
	m_isOpeningDoor: 1437n, // bool m_isOpeningDoor; |  0x59d | Schema_Builtin | Size: 0x1
	m_taskEntity: 1444n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_goalPosition: 1460n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_goalEntity: 1472n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_avoid: 1476n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_avoidTimestamp: 1480n, // float32 m_avoidTimestamp; |  0x5c8 | Schema_Builtin | Size: 0x4
	m_isStopping: 1484n, // bool m_isStopping; |  0x5cc | Schema_Builtin | Size: 0x1
	m_hasVisitedEnemySpawn: 1485n, // bool m_hasVisitedEnemySpawn; |  0x5cd | Schema_Builtin | Size: 0x1
	m_stillTimer: 1488n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_bEyeAnglesUnderPathFinderControl: 1504n, // bool m_bEyeAnglesUnderPathFinderControl; |  0x5e0 | Schema_Builtin | Size: 0x1
	m_pathIndex: 24288n, // int32_t m_pathIndex; |  0x5ee0 | Schema_Builtin | Size: 0x4
	m_areaEnteredTimestamp: 24292n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_repathTimer: 24296n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_avoidFriendTimer: 24320n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isFriendInTheWay: 24344n, // bool m_isFriendInTheWay; |  0x5f18 | Schema_Builtin | Size: 0x1
	m_politeTimer: 24352n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isWaitingBehindFriend: 24376n, // bool m_isWaitingBehindFriend; |  0x5f38 | Schema_Builtin | Size: 0x1
	m_pathLadderEnd: 24420n, // float32 m_pathLadderEnd; |  0x5f64 | Schema_Builtin | Size: 0x4
	m_mustRunTimer: 24496n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_waitTimer: 24520n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_updateTravelDistanceTimer: 24544n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_playerTravelDistance: 24568n, // float32 m_playerTravelDistance[64]; |  0x5ff8 | Schema_FixedArray | Size: 0x100
	m_travelDistancePhase: 24824n, // uint8_t m_travelDistancePhase; |  0x60f8 | Schema_Builtin | Size: 0x1
	m_hostageEscortCount: 25232n, // uint8_t m_hostageEscortCount; |  0x6290 | Schema_Builtin | Size: 0x1
	m_hostageEscortCountTimestamp: 25236n, // float32 m_hostageEscortCountTimestamp; |  0x6294 | Schema_Builtin | Size: 0x4
	m_desiredTeam: 25240n, // int32_t m_desiredTeam; |  0x6298 | Schema_Builtin | Size: 0x4
	m_hasJoined: 25244n, // bool m_hasJoined; |  0x629c | Schema_Builtin | Size: 0x1
	m_isWaitingForHostage: 25245n, // bool m_isWaitingForHostage; |  0x629d | Schema_Builtin | Size: 0x1
	m_inhibitWaitingForHostageTimer: 25248n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_waitForHostageTimer: 25272n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_noisePosition: 25296n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_noiseTravelDistance: 25308n, // float32 m_noiseTravelDistance; |  0x62dc | Schema_Builtin | Size: 0x4
	m_noiseTimestamp: 25312n, // float32 m_noiseTimestamp; |  0x62e0 | Schema_Builtin | Size: 0x4
	m_noiseSource: 25320n, // server::CCSPlayerPawn**  | Schema_Ptr | Size: 0x8
	m_noiseBendTimer: 25344n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_bentNoisePosition: 25368n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_bendNoisePositionValid: 25380n, // bool m_bendNoisePositionValid; |  0x6324 | Schema_Builtin | Size: 0x1
	m_lookAroundStateTimestamp: 25384n, // float32 m_lookAroundStateTimestamp; |  0x6328 | Schema_Builtin | Size: 0x4
	m_lookAheadAngle: 25388n, // float32 m_lookAheadAngle; |  0x632c | Schema_Builtin | Size: 0x4
	m_forwardAngle: 25392n, // float32 m_forwardAngle; |  0x6330 | Schema_Builtin | Size: 0x4
	m_inhibitLookAroundTimestamp: 25396n, // float32 m_inhibitLookAroundTimestamp; |  0x6334 | Schema_Builtin | Size: 0x4
	m_lookAtSpot: 25404n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lookAtSpotDuration: 25420n, // float32 m_lookAtSpotDuration; |  0x634c | Schema_Builtin | Size: 0x4
	m_lookAtSpotTimestamp: 25424n, // float32 m_lookAtSpotTimestamp; |  0x6350 | Schema_Builtin | Size: 0x4
	m_lookAtSpotAngleTolerance: 25428n, // float32 m_lookAtSpotAngleTolerance; |  0x6354 | Schema_Builtin | Size: 0x4
	m_lookAtSpotClearIfClose: 25432n, // bool m_lookAtSpotClearIfClose; |  0x6358 | Schema_Builtin | Size: 0x1
	m_lookAtSpotAttack: 25433n, // bool m_lookAtSpotAttack; |  0x6359 | Schema_Builtin | Size: 0x1
	m_lookAtDesc: 25440n, // char* m_lookAtDesc; |  0x6360 | Schema_Ptr | Size: 0x8
	m_peripheralTimestamp: 25448n, // float32 m_peripheralTimestamp; |  0x6368 | Schema_Builtin | Size: 0x4
	m_approachPointCount: 25840n, // uint8_t m_approachPointCount; |  0x64f0 | Schema_Builtin | Size: 0x1
	m_approachPointViewPosition: 25844n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_viewSteadyTimer: 25856n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_tossGrenadeTimer: 25880n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_isAvoidingGrenade: 25912n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_spotCheckTimestamp: 25944n, // float32 m_spotCheckTimestamp; |  0x6558 | Schema_Builtin | Size: 0x4
	m_checkedHidingSpotCount: 26976n, // int32_t m_checkedHidingSpotCount; |  0x6960 | Schema_Builtin | Size: 0x4
	m_lookPitch: 26980n, // float32 m_lookPitch; |  0x6964 | Schema_Builtin | Size: 0x4
	m_lookPitchVel: 26984n, // float32 m_lookPitchVel; |  0x6968 | Schema_Builtin | Size: 0x4
	m_lookYaw: 26988n, // float32 m_lookYaw; |  0x696c | Schema_Builtin | Size: 0x4
	m_lookYawVel: 26992n, // float32 m_lookYawVel; |  0x6970 | Schema_Builtin | Size: 0x4
	m_targetSpot: 26996n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_targetSpotVelocity: 27008n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_targetSpotPredicted: 27020n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_aimError: 27032n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_aimGoal: 27044n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_targetSpotTime: 27056n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_aimFocus: 27060n, // float32 m_aimFocus; |  0x69b4 | Schema_Builtin | Size: 0x4
	m_aimFocusInterval: 27064n, // float32 m_aimFocusInterval; |  0x69b8 | Schema_Builtin | Size: 0x4
	m_aimFocusNextUpdate: 27068n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_ignoreEnemiesTimer: 27080n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_enemy: 27104n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_isEnemyVisible: 27108n, // bool m_isEnemyVisible; |  0x69e4 | Schema_Builtin | Size: 0x1
	m_visibleEnemyParts: 27109n, // uint8_t m_visibleEnemyParts; |  0x69e5 | Schema_Builtin | Size: 0x1
	m_lastEnemyPosition: 27112n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lastSawEnemyTimestamp: 27124n, // float32 m_lastSawEnemyTimestamp; |  0x69f4 | Schema_Builtin | Size: 0x4
	m_firstSawEnemyTimestamp: 27128n, // float32 m_firstSawEnemyTimestamp; |  0x69f8 | Schema_Builtin | Size: 0x4
	m_currentEnemyAcquireTimestamp: 27132n, // float32 m_currentEnemyAcquireTimestamp; |  0x69fc | Schema_Builtin | Size: 0x4
	m_enemyDeathTimestamp: 27136n, // float32 m_enemyDeathTimestamp; |  0x6a00 | Schema_Builtin | Size: 0x4
	m_friendDeathTimestamp: 27140n, // float32 m_friendDeathTimestamp; |  0x6a04 | Schema_Builtin | Size: 0x4
	m_isLastEnemyDead: 27144n, // bool m_isLastEnemyDead; |  0x6a08 | Schema_Builtin | Size: 0x1
	m_nearbyEnemyCount: 27148n, // int32_t m_nearbyEnemyCount; |  0x6a0c | Schema_Builtin | Size: 0x4
	m_bomber: 27672n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_nearbyFriendCount: 27676n, // int32_t m_nearbyFriendCount; |  0x6c1c | Schema_Builtin | Size: 0x4
	m_closestVisibleFriend: 27680n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_closestVisibleHumanFriend: 27684n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_attentionInterval: 27688n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_attacker: 27704n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_attackedTimestamp: 27708n, // float32 m_attackedTimestamp; |  0x6c3c | Schema_Builtin | Size: 0x4
	m_burnedByFlamesTimer: 27712n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_lastVictimID: 27728n, // int32_t m_lastVictimID; |  0x6c50 | Schema_Builtin | Size: 0x4
	m_isAimingAtEnemy: 27732n, // bool m_isAimingAtEnemy; |  0x6c54 | Schema_Builtin | Size: 0x1
	m_isRapidFiring: 27733n, // bool m_isRapidFiring; |  0x6c55 | Schema_Builtin | Size: 0x1
	m_equipTimer: 27736n, // server::IntervalTimer  | Schema_DeclaredClass | Size: 0x10
	m_zoomTimer: 27752n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_fireWeaponTimestamp: 27776n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_lookForWeaponsOnGroundTimer: 27784n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_bIsSleeping: 27808n, // bool m_bIsSleeping; |  0x6ca0 | Schema_Builtin | Size: 0x1
	m_isEnemySniperVisible: 27809n, // bool m_isEnemySniperVisible; |  0x6ca1 | Schema_Builtin | Size: 0x1
	m_sawEnemySniperTimer: 27816n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_enemyQueueIndex: 28000n, // uint8_t m_enemyQueueIndex; |  0x6d60 | Schema_Builtin | Size: 0x1
	m_enemyQueueCount: 28001n, // uint8_t m_enemyQueueCount; |  0x6d61 | Schema_Builtin | Size: 0x1
	m_enemyQueueAttendIndex: 28002n, // uint8_t m_enemyQueueAttendIndex; |  0x6d62 | Schema_Builtin | Size: 0x1
	m_isStuck: 28003n, // bool m_isStuck; |  0x6d63 | Schema_Builtin | Size: 0x1
	m_stuckTimestamp: 28004n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_stuckSpot: 28008n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_wiggleTimer: 28024n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_stuckJumpTimer: 28048n, // server::CountdownTimer  | Schema_DeclaredClass | Size: 0x18
	m_nextCleanupCheckTimestamp: 28072n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_avgVel: 28076n, // float32 m_avgVel[10]; |  0x6dac | Schema_FixedArray | Size: 0x28
	m_avgVelIndex: 28116n, // int32_t m_avgVelIndex; |  0x6dd4 | Schema_Builtin | Size: 0x4
	m_avgVelCount: 28120n, // int32_t m_avgVelCount; |  0x6dd8 | Schema_Builtin | Size: 0x4
	m_lastOrigin: 28124n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_lastRadioRecievedTimestamp: 28140n, // float32 m_lastRadioRecievedTimestamp; |  0x6dec | Schema_Builtin | Size: 0x4
	m_lastRadioSentTimestamp: 28144n, // float32 m_lastRadioSentTimestamp; |  0x6df0 | Schema_Builtin | Size: 0x4
	m_radioSubject: 28148n, // GlobalTypes::CHandle<server::CCSPlayerPawn>  | Schema_Atomic | Size: 0x4
	m_radioPosition: 28152n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_voiceEndTimestamp: 28164n, // float32 m_voiceEndTimestamp; |  0x6e04 | Schema_Builtin | Size: 0x4
	m_lastValidReactionQueueFrame: 28176n, // int32_t m_lastValidReactionQueueFrame; |  0x6e10 | Schema_Builtin | Size: 0x4
}
