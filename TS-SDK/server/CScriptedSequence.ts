// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x810
// BaseClass: : public CS2::server::CBaseEntity
export const server_CScriptedSequence  = {
	...server_CBaseEntity,
	m_iszEntry: 1264n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszPreIdle: 1272n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszPlay: 1280n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszPostIdle: 1288n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszModifierToAddOnPlay: 1296n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszNextScript: 1304n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszEntity: 1312n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSyncGroup: 1320n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_nMoveTo: 1328n, // modellib::ScriptedMoveTo_t  | Schema_DeclaredEnum | Size: 0x4
	m_nMoveToGait: 1332n, // modellib::SharedMovementGait_t  | Schema_DeclaredEnum | Size: 0x1
	m_nHeldWeaponBehavior: 1336n, // modellib::ScriptedHeldWeaponBehavior_t  | Schema_DeclaredEnum | Size: 0x4
	m_nForcedCrouchState: 1340n, // client::ForcedCrouchState_t  | Schema_DeclaredEnum | Size: 0x4
	m_bIsPlayingPreIdle: 1344n, // bool m_bIsPlayingPreIdle; |  0x540 | Schema_Builtin | Size: 0x1
	m_bIsPlayingEntry: 1345n, // bool m_bIsPlayingEntry; |  0x541 | Schema_Builtin | Size: 0x1
	m_bIsPlayingAction: 1346n, // bool m_bIsPlayingAction; |  0x542 | Schema_Builtin | Size: 0x1
	m_bIsPlayingPostIdle: 1347n, // bool m_bIsPlayingPostIdle; |  0x543 | Schema_Builtin | Size: 0x1
	m_bDontRotateOther: 1348n, // bool m_bDontRotateOther; |  0x544 | Schema_Builtin | Size: 0x1
	m_bIsRepeatable: 1349n, // bool m_bIsRepeatable; |  0x545 | Schema_Builtin | Size: 0x1
	m_bShouldLeaveCorpse: 1350n, // bool m_bShouldLeaveCorpse; |  0x546 | Schema_Builtin | Size: 0x1
	m_bStartOnSpawn: 1351n, // bool m_bStartOnSpawn; |  0x547 | Schema_Builtin | Size: 0x1
	m_bDisallowInterrupts: 1352n, // bool m_bDisallowInterrupts; |  0x548 | Schema_Builtin | Size: 0x1
	m_bCanOverrideNPCState: 1353n, // bool m_bCanOverrideNPCState; |  0x549 | Schema_Builtin | Size: 0x1
	m_bDontTeleportAtEnd: 1354n, // bool m_bDontTeleportAtEnd; |  0x54a | Schema_Builtin | Size: 0x1
	m_bHighPriority: 1355n, // bool m_bHighPriority; |  0x54b | Schema_Builtin | Size: 0x1
	m_bHideDebugComplaints: 1356n, // bool m_bHideDebugComplaints; |  0x54c | Schema_Builtin | Size: 0x1
	m_bContinueOnDeath: 1357n, // bool m_bContinueOnDeath; |  0x54d | Schema_Builtin | Size: 0x1
	m_bLoopPreIdleSequence: 1358n, // bool m_bLoopPreIdleSequence; |  0x54e | Schema_Builtin | Size: 0x1
	m_bLoopActionSequence: 1359n, // bool m_bLoopActionSequence; |  0x54f | Schema_Builtin | Size: 0x1
	m_bLoopPostIdleSequence: 1360n, // bool m_bLoopPostIdleSequence; |  0x550 | Schema_Builtin | Size: 0x1
	m_bSynchPostIdles: 1361n, // bool m_bSynchPostIdles; |  0x551 | Schema_Builtin | Size: 0x1
	m_bIgnoreLookAt: 1362n, // bool m_bIgnoreLookAt; |  0x552 | Schema_Builtin | Size: 0x1
	m_bIgnoreGravity: 1363n, // bool m_bIgnoreGravity; |  0x553 | Schema_Builtin | Size: 0x1
	m_bDisableNPCCollisions: 1364n, // bool m_bDisableNPCCollisions; |  0x554 | Schema_Builtin | Size: 0x1
	m_bKeepAnimgraphLockedPost: 1365n, // bool m_bKeepAnimgraphLockedPost; |  0x555 | Schema_Builtin | Size: 0x1
	m_bDontAddModifiers: 1366n, // bool m_bDontAddModifiers; |  0x556 | Schema_Builtin | Size: 0x1
	m_bDisableAimingWhileMoving: 1367n, // bool m_bDisableAimingWhileMoving; |  0x557 | Schema_Builtin | Size: 0x1
	m_bIgnoreRotation: 1368n, // bool m_bIgnoreRotation; |  0x558 | Schema_Builtin | Size: 0x1
	m_flRadius: 1372n, // float32 m_flRadius; |  0x55c | Schema_Builtin | Size: 0x4
	m_flRepeat: 1376n, // float32 m_flRepeat; |  0x560 | Schema_Builtin | Size: 0x4
	m_flPlayAnimFadeInTime: 1380n, // float32 m_flPlayAnimFadeInTime; |  0x564 | Schema_Builtin | Size: 0x4
	m_flMoveInterpTime: 1384n, // float32 m_flMoveInterpTime; |  0x568 | Schema_Builtin | Size: 0x4
	m_flAngRate: 1388n, // float32 m_flAngRate; |  0x56c | Schema_Builtin | Size: 0x4
	m_flMoveSpeed: 1392n, // float32 m_flMoveSpeed; |  0x570 | Schema_Builtin | Size: 0x4
	m_bWaitUntilMoveCompletesToStartAnimation: 1396n, // bool m_bWaitUntilMoveCompletesToStartAnimation; |  0x574 | Schema_Builtin | Size: 0x1
	m_nNotReadySequenceCount: 1400n, // int32_t m_nNotReadySequenceCount; |  0x578 | Schema_Builtin | Size: 0x4
	m_startTime: 1404n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bWaitForBeginSequence: 1408n, // bool m_bWaitForBeginSequence; |  0x580 | Schema_Builtin | Size: 0x1
	m_saved_effects: 1412n, // int32_t m_saved_effects; |  0x584 | Schema_Builtin | Size: 0x4
	m_savedFlags: 1416n, // int32_t m_savedFlags; |  0x588 | Schema_Builtin | Size: 0x4
	m_savedCollisionGroup: 1420n, // int32_t m_savedCollisionGroup; |  0x58c | Schema_Builtin | Size: 0x4
	m_bInterruptable: 1424n, // bool m_bInterruptable; |  0x590 | Schema_Builtin | Size: 0x1
	m_sequenceStarted: 1425n, // bool m_sequenceStarted; |  0x591 | Schema_Builtin | Size: 0x1
	m_bPositionRelativeToOtherEntity: 1426n, // bool m_bPositionRelativeToOtherEntity; |  0x592 | Schema_Builtin | Size: 0x1
	m_hTargetEnt: 1428n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hNextCine: 1432n, // GlobalTypes::CHandle<server::CScriptedSequence>  | Schema_Atomic | Size: 0x4
	m_bThinking: 1436n, // bool m_bThinking; |  0x59c | Schema_Builtin | Size: 0x1
	m_bInitiatedSelfDelete: 1437n, // bool m_bInitiatedSelfDelete; |  0x59d | Schema_Builtin | Size: 0x1
	m_bIsTeleportingDueToMoveTo: 1438n, // bool m_bIsTeleportingDueToMoveTo; |  0x59e | Schema_Builtin | Size: 0x1
	m_bAllowCustomInterruptConditions: 1439n, // bool m_bAllowCustomInterruptConditions; |  0x59f | Schema_Builtin | Size: 0x1
	m_hForcedTarget: 1440n, // GlobalTypes::CHandle<server::CBaseAnimGraph>  | Schema_Atomic | Size: 0x4
	m_bDontCancelOtherSequences: 1444n, // bool m_bDontCancelOtherSequences; |  0x5a4 | Schema_Builtin | Size: 0x1
	m_bForceSynch: 1445n, // bool m_bForceSynch; |  0x5a5 | Schema_Builtin | Size: 0x1
	m_bPreventUpdateYawOnFinish: 1446n, // bool m_bPreventUpdateYawOnFinish; |  0x5a6 | Schema_Builtin | Size: 0x1
	m_bEnsureOnNavmeshOnFinish: 1447n, // bool m_bEnsureOnNavmeshOnFinish; |  0x5a7 | Schema_Builtin | Size: 0x1
	m_onDeathBehavior: 1448n, // client::ScriptedOnDeath_t  | Schema_DeclaredEnum | Size: 0x4
	m_ConflictResponse: 1452n, // server::ScriptedConflictResponse_t  | Schema_DeclaredEnum | Size: 0x4
	m_OnBeginSequence: 1456n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnActionStartOrLoop: 1496n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnEndSequence: 1536n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnPostIdleEndSequence: 1576n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnCancelSequence: 1616n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnCancelFailedSequence: 1656n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnScriptEvent: 1696n, // GlobalTypes::CEntityIOOutput[8]  | Schema_FixedArray | Size: 0xa00
	m_matOtherToMain: 2016n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
	m_hInteractionMainEntity: 2048n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iPlayerDeathBehavior: 2052n, // int32_t m_iPlayerDeathBehavior; |  0x804 | Schema_Builtin | Size: 0x4
	m_bSkipFadeIn: 2056n, // bool m_bSkipFadeIn; |  0x808 | Schema_Builtin | Size: 0x1
}
