// generated - do not edit!

import {entity2_CEntityInstance} from '../entity2/CEntityInstance';
// Class size: 0x5F8
// BaseClass: : public CS2::entity2::CEntityInstance
export const client_C_BaseEntity  = {
	...entity2_CEntityInstance,
	m_CBodyComponent: 56n, // client::CBodyComponent**  | Schema_Ptr | Size: 0x8
	m_NetworkTransmitComponent: 64n, // client::CNetworkTransmitComponent  | Schema_DeclaredClass | Size: 0x1c8
	m_nLastThinkTick: 808n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_pGameSceneNode: 816n, // client::CGameSceneNode**  | Schema_Ptr | Size: 0x8
	m_pRenderComponent: 824n, // client::CRenderComponent**  | Schema_Ptr | Size: 0x8
	m_pCollision: 832n, // client::CCollisionProperty**  | Schema_Ptr | Size: 0x8
	m_iMaxHealth: 840n, // int32_t m_iMaxHealth; |  0x348 | Schema_Builtin | Size: 0x4
	m_iHealth: 844n, // int32_t m_iHealth; |  0x34c | Schema_Builtin | Size: 0x4
	m_flDamageAccumulator: 848n, // float32 m_flDamageAccumulator; |  0x350 | Schema_Builtin | Size: 0x4
	m_lifeState: 852n, // uint8_t m_lifeState; |  0x354 | Schema_Builtin | Size: 0x1
	m_bTakesDamage: 853n, // bool m_bTakesDamage; |  0x355 | Schema_Builtin | Size: 0x1
	m_nTakeDamageFlags: 856n, // client::TakeDamageFlags_t  | Schema_DeclaredEnum | Size: 0x8
	m_nPlatformType: 864n, // client::EntityPlatformTypes_t  | Schema_DeclaredEnum | Size: 0x1
	m_ubInterpolationFrame: 865n, // uint8_t m_ubInterpolationFrame; |  0x361 | Schema_Builtin | Size: 0x1
	m_hSceneObjectController: 868n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_nNoInterpolationTick: 872n, // int32_t m_nNoInterpolationTick; |  0x368 | Schema_Builtin | Size: 0x4
	m_nVisibilityNoInterpolationTick: 876n, // int32_t m_nVisibilityNoInterpolationTick; |  0x36c | Schema_Builtin | Size: 0x4
	m_flProxyRandomValue: 880n, // float32 m_flProxyRandomValue; |  0x370 | Schema_Builtin | Size: 0x4
	m_iEFlags: 884n, // int32_t m_iEFlags; |  0x374 | Schema_Builtin | Size: 0x4
	m_nWaterType: 888n, // uint8_t m_nWaterType; |  0x378 | Schema_Builtin | Size: 0x1
	m_bInterpolateEvenWithNoModel: 889n, // bool m_bInterpolateEvenWithNoModel; |  0x379 | Schema_Builtin | Size: 0x1
	m_bPredictionEligible: 890n, // bool m_bPredictionEligible; |  0x37a | Schema_Builtin | Size: 0x1
	m_bApplyLayerMatchIDToModel: 891n, // bool m_bApplyLayerMatchIDToModel; |  0x37b | Schema_Builtin | Size: 0x1
	m_tokLayerMatchID: 892n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_nSubclassID: 896n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_nSimulationTick: 912n, // int32_t m_nSimulationTick; |  0x390 | Schema_Builtin | Size: 0x4
	m_iCurrentThinkContext: 916n, // int32_t m_iCurrentThinkContext; |  0x394 | Schema_Builtin | Size: 0x4
	m_aThinkFunctions: 920n, // GlobalTypes::CUtlVector<client::thinkfunc_t>  | Schema_Atomic | Size: 0x18
	m_bDisabledContextThinks: 944n, // bool m_bDisabledContextThinks; |  0x3b0 | Schema_Builtin | Size: 0x1
	m_flAnimTime: 948n, // float32 m_flAnimTime; |  0x3b4 | Schema_Builtin | Size: 0x4
	m_flSimulationTime: 952n, // float32 m_flSimulationTime; |  0x3b8 | Schema_Builtin | Size: 0x4
	m_nSceneObjectOverrideFlags: 956n, // uint8_t m_nSceneObjectOverrideFlags; |  0x3bc | Schema_Builtin | Size: 0x1
	m_bHasSuccessfullyInterpolated: 957n, // bool m_bHasSuccessfullyInterpolated; |  0x3bd | Schema_Builtin | Size: 0x1
	m_bHasAddedVarsToInterpolation: 958n, // bool m_bHasAddedVarsToInterpolation; |  0x3be | Schema_Builtin | Size: 0x1
	m_bRenderEvenWhenNotSuccessfullyInterpolated: 959n, // bool m_bRenderEvenWhenNotSuccessfullyInterpolated; |  0x3bf | Schema_Builtin | Size: 0x1
	m_nInterpolationLatchDirtyFlags: 960n, // int32_t m_nInterpolationLatchDirtyFlags[2]; |  0x3c0 | Schema_FixedArray | Size: 0x8
	m_ListEntry: 968n, // uint16_t m_ListEntry[11]; |  0x3c8 | Schema_FixedArray | Size: 0x16
	m_flCreateTime: 992n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flSpeed: 996n, // float32 m_flSpeed; |  0x3e4 | Schema_Builtin | Size: 0x4
	m_EntClientFlags: 1000n, // uint16_t m_EntClientFlags; |  0x3e8 | Schema_Builtin | Size: 0x2
	m_bClientSideRagdoll: 1002n, // bool m_bClientSideRagdoll; |  0x3ea | Schema_Builtin | Size: 0x1
	m_iTeamNum: 1003n, // uint8_t m_iTeamNum; |  0x3eb | Schema_Builtin | Size: 0x1
	m_spawnflags: 1004n, // uint32_t m_spawnflags; |  0x3ec | Schema_Builtin | Size: 0x4
	m_nNextThinkTick: 1008n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_fFlags: 1016n, // uint32_t m_fFlags; |  0x3f8 | Schema_Builtin | Size: 0x4
	m_vecAbsVelocity: 1020n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecServerVelocity: 1032n, // client::CNetworkVelocityVector  | Schema_DeclaredClass | Size: 0x28
	m_vecVelocity: 1072n, // client::CNetworkVelocityVector  | Schema_DeclaredClass | Size: 0x28
	m_vecBaseVelocity: 1296n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hEffectEntity: 1308n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_hOwnerEntity: 1312n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_MoveCollide: 1316n, // client::MoveCollide_t  | Schema_DeclaredEnum | Size: 0x1
	m_MoveType: 1317n, // client::MoveType_t  | Schema_DeclaredEnum | Size: 0x1
	m_nActualMoveType: 1318n, // client::MoveType_t  | Schema_DeclaredEnum | Size: 0x1
	m_flWaterLevel: 1320n, // float32 m_flWaterLevel; |  0x528 | Schema_Builtin | Size: 0x4
	m_fEffects: 1324n, // uint32_t m_fEffects; |  0x52c | Schema_Builtin | Size: 0x4
	m_hGroundEntity: 1328n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_nGroundBodyIndex: 1332n, // int32_t m_nGroundBodyIndex; |  0x534 | Schema_Builtin | Size: 0x4
	m_flFriction: 1336n, // float32 m_flFriction; |  0x538 | Schema_Builtin | Size: 0x4
	m_flElasticity: 1340n, // float32 m_flElasticity; |  0x53c | Schema_Builtin | Size: 0x4
	m_flGravityScale: 1344n, // float32 m_flGravityScale; |  0x540 | Schema_Builtin | Size: 0x4
	m_flTimeScale: 1348n, // float32 m_flTimeScale; |  0x544 | Schema_Builtin | Size: 0x4
	m_bAnimatedEveryTick: 1352n, // bool m_bAnimatedEveryTick; |  0x548 | Schema_Builtin | Size: 0x1
	m_bGravityDisabled: 1353n, // bool m_bGravityDisabled; |  0x549 | Schema_Builtin | Size: 0x1
	m_flNavIgnoreUntilTime: 1356n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hThink: 1360n, // uint16_t m_hThink; |  0x550 | Schema_Builtin | Size: 0x2
	m_fBBoxVisFlags: 1376n, // uint8_t m_fBBoxVisFlags; |  0x560 | Schema_Builtin | Size: 0x1
	m_flActualGravityScale: 1380n, // float32 m_flActualGravityScale; |  0x564 | Schema_Builtin | Size: 0x4
	m_bGravityActuallyDisabled: 1384n, // bool m_bGravityActuallyDisabled; |  0x568 | Schema_Builtin | Size: 0x1
	m_bPredictable: 1385n, // bool m_bPredictable; |  0x569 | Schema_Builtin | Size: 0x1
	m_bRenderWithViewModels: 1386n, // bool m_bRenderWithViewModels; |  0x56a | Schema_Builtin | Size: 0x1
	m_nFirstPredictableCommand: 1388n, // int32_t m_nFirstPredictableCommand; |  0x56c | Schema_Builtin | Size: 0x4
	m_nLastPredictableCommand: 1392n, // int32_t m_nLastPredictableCommand; |  0x570 | Schema_Builtin | Size: 0x4
	m_hOldMoveParent: 1396n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_Particles: 1400n, // particleslib::CParticleProperty  | Schema_DeclaredClass | Size: 0x28
	m_vecAngVelocity: 1448n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_DataChangeEventRef: 1460n, // int32_t m_DataChangeEventRef; |  0x5b4 | Schema_Builtin | Size: 0x4
	m_dependencies: 1464n, // GlobalTypes::CUtlVector<GlobalTypes::CEntityHandle>  | Schema_Atomic | Size: 0x18
	m_nCreationTick: 1488n, // int32_t m_nCreationTick; |  0x5d0 | Schema_Builtin | Size: 0x4
	m_bAnimTimeChanged: 1501n, // bool m_bAnimTimeChanged; |  0x5dd | Schema_Builtin | Size: 0x1
	m_bSimulationTimeChanged: 1502n, // bool m_bSimulationTimeChanged; |  0x5de | Schema_Builtin | Size: 0x1
	m_sUniqueHammerID: 1512n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_nBloodType: 1520n, // client::BloodType  | Schema_DeclaredEnum | Size: 0x4
}
