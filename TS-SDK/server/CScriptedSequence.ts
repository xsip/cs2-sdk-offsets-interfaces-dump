// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x6F0
// BaseClass: : public CS2::server::CBaseEntity
export const server_CScriptedSequence  = {
	...server_CBaseEntity,
	m_iszEntry: 1192n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszPreIdle: 1200n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszPlay: 1208n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszPostIdle: 1216n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszModifierToAddOnPlay: 1224n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszNextScript: 1232n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszEntity: 1240n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iszSyncGroup: 1248n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_nMoveTo: 1256n, // modellib::ScriptedMoveTo_t  | Schema_DeclaredEnum | Size: 0x4
	m_nMoveToGait: 1260n, // modellib::SharedMovementGait_t  | Schema_DeclaredEnum | Size: 0x1
	m_nHeldWeaponBehavior: 1264n, // modellib::ScriptedHeldWeaponBehavior_t  | Schema_DeclaredEnum | Size: 0x4
	m_nForcedCrouchState: 1268n, // client::ForcedCrouchState_t  | Schema_DeclaredEnum | Size: 0x4
	m_bIsPlayingPreIdle: 1272n, // bool m_bIsPlayingPreIdle; |  0x4f8 | Schema_Builtin | Size: 0x1
	m_bIsPlayingEntry: 1273n, // bool m_bIsPlayingEntry; |  0x4f9 | Schema_Builtin | Size: 0x1
	m_bIsPlayingAction: 1274n, // bool m_bIsPlayingAction; |  0x4fa | Schema_Builtin | Size: 0x1
	m_bIsPlayingPostIdle: 1275n, // bool m_bIsPlayingPostIdle; |  0x4fb | Schema_Builtin | Size: 0x1
	m_bDontRotateOther: 1276n, // bool m_bDontRotateOther; |  0x4fc | Schema_Builtin | Size: 0x1
	m_bIsRepeatable: 1277n, // bool m_bIsRepeatable; |  0x4fd | Schema_Builtin | Size: 0x1
	m_bShouldLeaveCorpse: 1278n, // bool m_bShouldLeaveCorpse; |  0x4fe | Schema_Builtin | Size: 0x1
	m_bStartOnSpawn: 1279n, // bool m_bStartOnSpawn; |  0x4ff | Schema_Builtin | Size: 0x1
	m_bDisallowInterrupts: 1280n, // bool m_bDisallowInterrupts; |  0x500 | Schema_Builtin | Size: 0x1
	m_bCanOverrideNPCState: 1281n, // bool m_bCanOverrideNPCState; |  0x501 | Schema_Builtin | Size: 0x1
	m_bDontTeleportAtEnd: 1282n, // bool m_bDontTeleportAtEnd; |  0x502 | Schema_Builtin | Size: 0x1
	m_bHighPriority: 1283n, // bool m_bHighPriority; |  0x503 | Schema_Builtin | Size: 0x1
	m_bHideDebugComplaints: 1284n, // bool m_bHideDebugComplaints; |  0x504 | Schema_Builtin | Size: 0x1
	m_bContinueOnDeath: 1285n, // bool m_bContinueOnDeath; |  0x505 | Schema_Builtin | Size: 0x1
	m_bLoopPreIdleSequence: 1286n, // bool m_bLoopPreIdleSequence; |  0x506 | Schema_Builtin | Size: 0x1
	m_bLoopActionSequence: 1287n, // bool m_bLoopActionSequence; |  0x507 | Schema_Builtin | Size: 0x1
	m_bLoopPostIdleSequence: 1288n, // bool m_bLoopPostIdleSequence; |  0x508 | Schema_Builtin | Size: 0x1
	m_bSynchPostIdles: 1289n, // bool m_bSynchPostIdles; |  0x509 | Schema_Builtin | Size: 0x1
	m_bIgnoreLookAt: 1290n, // bool m_bIgnoreLookAt; |  0x50a | Schema_Builtin | Size: 0x1
	m_bIgnoreGravity: 1291n, // bool m_bIgnoreGravity; |  0x50b | Schema_Builtin | Size: 0x1
	m_bDisableNPCCollisions: 1292n, // bool m_bDisableNPCCollisions; |  0x50c | Schema_Builtin | Size: 0x1
	m_bKeepAnimgraphLockedPost: 1293n, // bool m_bKeepAnimgraphLockedPost; |  0x50d | Schema_Builtin | Size: 0x1
	m_bDontAddModifiers: 1294n, // bool m_bDontAddModifiers; |  0x50e | Schema_Builtin | Size: 0x1
	m_bDisableAimingWhileMoving: 1295n, // bool m_bDisableAimingWhileMoving; |  0x50f | Schema_Builtin | Size: 0x1
	m_bIgnoreRotation: 1296n, // bool m_bIgnoreRotation; |  0x510 | Schema_Builtin | Size: 0x1
	m_flRadius: 1300n, // float32 m_flRadius; |  0x514 | Schema_Builtin | Size: 0x4
	m_flRepeat: 1304n, // float32 m_flRepeat; |  0x518 | Schema_Builtin | Size: 0x4
	m_flPlayAnimFadeInTime: 1308n, // float32 m_flPlayAnimFadeInTime; |  0x51c | Schema_Builtin | Size: 0x4
	m_flMoveInterpTime: 1312n, // float32 m_flMoveInterpTime; |  0x520 | Schema_Builtin | Size: 0x4
	m_flAngRate: 1316n, // float32 m_flAngRate; |  0x524 | Schema_Builtin | Size: 0x4
	m_flMoveSpeed: 1320n, // float32 m_flMoveSpeed; |  0x528 | Schema_Builtin | Size: 0x4
	m_bWaitUntilMoveCompletesToStartAnimation: 1324n, // bool m_bWaitUntilMoveCompletesToStartAnimation; |  0x52c | Schema_Builtin | Size: 0x1
	m_nNotReadySequenceCount: 1328n, // int32_t m_nNotReadySequenceCount; |  0x530 | Schema_Builtin | Size: 0x4
	m_startTime: 1332n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bWaitForBeginSequence: 1336n, // bool m_bWaitForBeginSequence; |  0x538 | Schema_Builtin | Size: 0x1
	m_saved_effects: 1340n, // int32_t m_saved_effects; |  0x53c | Schema_Builtin | Size: 0x4
	m_savedFlags: 1344n, // int32_t m_savedFlags; |  0x540 | Schema_Builtin | Size: 0x4
	m_savedCollisionGroup: 1348n, // int32_t m_savedCollisionGroup; |  0x544 | Schema_Builtin | Size: 0x4
	m_bInterruptable: 1352n, // bool m_bInterruptable; |  0x548 | Schema_Builtin | Size: 0x1
	m_sequenceStarted: 1353n, // bool m_sequenceStarted; |  0x549 | Schema_Builtin | Size: 0x1
	m_bPositionRelativeToOtherEntity: 1354n, // bool m_bPositionRelativeToOtherEntity; |  0x54a | Schema_Builtin | Size: 0x1
	m_hTargetEnt: 1356n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hNextCine: 1360n, // GlobalTypes::CHandle<server::CScriptedSequence>  | Schema_Atomic | Size: 0x4
	m_bThinking: 1364n, // bool m_bThinking; |  0x554 | Schema_Builtin | Size: 0x1
	m_bInitiatedSelfDelete: 1365n, // bool m_bInitiatedSelfDelete; |  0x555 | Schema_Builtin | Size: 0x1
	m_bIsTeleportingDueToMoveTo: 1366n, // bool m_bIsTeleportingDueToMoveTo; |  0x556 | Schema_Builtin | Size: 0x1
	m_bAllowCustomInterruptConditions: 1367n, // bool m_bAllowCustomInterruptConditions; |  0x557 | Schema_Builtin | Size: 0x1
	m_hForcedTarget: 1368n, // GlobalTypes::CHandle<server::CBaseAnimGraph>  | Schema_Atomic | Size: 0x4
	m_bDontCancelOtherSequences: 1372n, // bool m_bDontCancelOtherSequences; |  0x55c | Schema_Builtin | Size: 0x1
	m_bForceSynch: 1373n, // bool m_bForceSynch; |  0x55d | Schema_Builtin | Size: 0x1
	m_bPreventUpdateYawOnFinish: 1374n, // bool m_bPreventUpdateYawOnFinish; |  0x55e | Schema_Builtin | Size: 0x1
	m_bEnsureOnNavmeshOnFinish: 1375n, // bool m_bEnsureOnNavmeshOnFinish; |  0x55f | Schema_Builtin | Size: 0x1
	m_onDeathBehavior: 1376n, // client::ScriptedOnDeath_t  | Schema_DeclaredEnum | Size: 0x4
	m_ConflictResponse: 1380n, // server::ScriptedConflictResponse_t  | Schema_DeclaredEnum | Size: 0x4
	m_OnBeginSequence: 1384n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnActionStartOrLoop: 1408n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnEndSequence: 1432n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnPostIdleEndSequence: 1456n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnCancelSequence: 1480n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnCancelFailedSequence: 1504n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnScriptEvent: 1528n, // GlobalTypes::CEntityIOOutput[8]  | Schema_FixedArray | Size: 0xc0
	m_matOtherToMain: 1728n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
	m_hInteractionMainEntity: 1760n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_iPlayerDeathBehavior: 1764n, // int32_t m_iPlayerDeathBehavior; |  0x6e4 | Schema_Builtin | Size: 0x4
	m_bSkipFadeIn: 1768n, // bool m_bSkipFadeIn; |  0x6e8 | Schema_Builtin | Size: 0x1
}
