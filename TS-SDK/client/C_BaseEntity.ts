// generated - do not edit!

import {entity2_CEntityInstance} from '../entity2/CEntityInstance';
// Class size: 0x608
// BaseClass: : public CS2::entity2::CEntityInstance
export const client_C_BaseEntity  = {
	...entity2_CEntityInstance,
	m_CBodyComponent: 56n, // client::CBodyComponent**  | Schema_Ptr | Size: 0x8
	m_NetworkTransmitComponent: 64n, // client::CNetworkTransmitComponent  | Schema_DeclaredClass | Size: 0x1d0
	m_nLastThinkTick: 816n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_pGameSceneNode: 824n, // client::CGameSceneNode**  | Schema_Ptr | Size: 0x8
	m_pRenderComponent: 832n, // client::CRenderComponent**  | Schema_Ptr | Size: 0x8
	m_pCollision: 840n, // client::CCollisionProperty**  | Schema_Ptr | Size: 0x8
	m_iMaxHealth: 848n, // int32_t m_iMaxHealth; |  0x350 | Schema_Builtin | Size: 0x4
	m_iHealth: 852n, // int32_t m_iHealth; |  0x354 | Schema_Builtin | Size: 0x4
	m_flDamageAccumulator: 856n, // float32 m_flDamageAccumulator; |  0x358 | Schema_Builtin | Size: 0x4
	m_lifeState: 860n, // uint8_t m_lifeState; |  0x35c | Schema_Builtin | Size: 0x1
	m_bTakesDamage: 861n, // bool m_bTakesDamage; |  0x35d | Schema_Builtin | Size: 0x1
	m_nTakeDamageFlags: 864n, // client::TakeDamageFlags_t  | Schema_DeclaredEnum | Size: 0x8
	m_nPlatformType: 872n, // client::EntityPlatformTypes_t  | Schema_DeclaredEnum | Size: 0x1
	m_ubInterpolationFrame: 873n, // uint8_t m_ubInterpolationFrame; |  0x369 | Schema_Builtin | Size: 0x1
	m_hSceneObjectController: 876n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_nNoInterpolationTick: 880n, // int32_t m_nNoInterpolationTick; |  0x370 | Schema_Builtin | Size: 0x4
	m_nVisibilityNoInterpolationTick: 884n, // int32_t m_nVisibilityNoInterpolationTick; |  0x374 | Schema_Builtin | Size: 0x4
	m_flProxyRandomValue: 888n, // float32 m_flProxyRandomValue; |  0x378 | Schema_Builtin | Size: 0x4
	m_iEFlags: 892n, // int32_t m_iEFlags; |  0x37c | Schema_Builtin | Size: 0x4
	m_nWaterType: 896n, // uint8_t m_nWaterType; |  0x380 | Schema_Builtin | Size: 0x1
	m_bInterpolateEvenWithNoModel: 897n, // bool m_bInterpolateEvenWithNoModel; |  0x381 | Schema_Builtin | Size: 0x1
	m_bPredictionEligible: 898n, // bool m_bPredictionEligible; |  0x382 | Schema_Builtin | Size: 0x1
	m_bApplyLayerMatchIDToModel: 899n, // bool m_bApplyLayerMatchIDToModel; |  0x383 | Schema_Builtin | Size: 0x1
	m_tokLayerMatchID: 900n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_nSubclassID: 904n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_nSimulationTick: 920n, // int32_t m_nSimulationTick; |  0x398 | Schema_Builtin | Size: 0x4
	m_iCurrentThinkContext: 924n, // int32_t m_iCurrentThinkContext; |  0x39c | Schema_Builtin | Size: 0x4
	m_aThinkFunctions: 928n, // GlobalTypes::CUtlVector<client::thinkfunc_t>  | Schema_Atomic | Size: 0x18
	m_bDisabledContextThinks: 952n, // bool m_bDisabledContextThinks; |  0x3b8 | Schema_Builtin | Size: 0x1
	m_flAnimTime: 956n, // float32 m_flAnimTime; |  0x3bc | Schema_Builtin | Size: 0x4
	m_flSimulationTime: 960n, // float32 m_flSimulationTime; |  0x3c0 | Schema_Builtin | Size: 0x4
	m_nSceneObjectOverrideFlags: 964n, // uint8_t m_nSceneObjectOverrideFlags; |  0x3c4 | Schema_Builtin | Size: 0x1
	m_bHasSuccessfullyInterpolated: 965n, // bool m_bHasSuccessfullyInterpolated; |  0x3c5 | Schema_Builtin | Size: 0x1
	m_bHasAddedVarsToInterpolation: 966n, // bool m_bHasAddedVarsToInterpolation; |  0x3c6 | Schema_Builtin | Size: 0x1
	m_bRenderEvenWhenNotSuccessfullyInterpolated: 967n, // bool m_bRenderEvenWhenNotSuccessfullyInterpolated; |  0x3c7 | Schema_Builtin | Size: 0x1
	m_nInterpolationLatchDirtyFlags: 968n, // int32_t m_nInterpolationLatchDirtyFlags[2]; |  0x3c8 | Schema_FixedArray | Size: 0x8
	m_ListEntry: 976n, // uint16_t m_ListEntry[11]; |  0x3d0 | Schema_FixedArray | Size: 0x16
	m_flCreateTime: 1000n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flSpeed: 1004n, // float32 m_flSpeed; |  0x3ec | Schema_Builtin | Size: 0x4
	m_EntClientFlags: 1008n, // uint16_t m_EntClientFlags; |  0x3f0 | Schema_Builtin | Size: 0x2
	m_bClientSideRagdoll: 1010n, // bool m_bClientSideRagdoll; |  0x3f2 | Schema_Builtin | Size: 0x1
	m_iTeamNum: 1011n, // uint8_t m_iTeamNum; |  0x3f3 | Schema_Builtin | Size: 0x1
	m_spawnflags: 1012n, // uint32_t m_spawnflags; |  0x3f4 | Schema_Builtin | Size: 0x4
	m_nNextThinkTick: 1016n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_fFlags: 1024n, // uint32_t m_fFlags; |  0x400 | Schema_Builtin | Size: 0x4
	m_vecAbsVelocity: 1028n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecServerVelocity: 1040n, // client::CNetworkVelocityVector  | Schema_DeclaredClass | Size: 0x28
	m_vecVelocity: 1080n, // client::CNetworkVelocityVector  | Schema_DeclaredClass | Size: 0x28
	m_vecBaseVelocity: 1304n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_hEffectEntity: 1316n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_hOwnerEntity: 1320n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_MoveCollide: 1324n, // client::MoveCollide_t  | Schema_DeclaredEnum | Size: 0x1
	m_MoveType: 1325n, // client::MoveType_t  | Schema_DeclaredEnum | Size: 0x1
	m_nActualMoveType: 1326n, // client::MoveType_t  | Schema_DeclaredEnum | Size: 0x1
	m_flWaterLevel: 1328n, // float32 m_flWaterLevel; |  0x530 | Schema_Builtin | Size: 0x4
	m_fEffects: 1332n, // uint32_t m_fEffects; |  0x534 | Schema_Builtin | Size: 0x4
	m_hGroundEntity: 1336n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_nGroundBodyIndex: 1340n, // int32_t m_nGroundBodyIndex; |  0x53c | Schema_Builtin | Size: 0x4
	m_flFriction: 1344n, // float32 m_flFriction; |  0x540 | Schema_Builtin | Size: 0x4
	m_flElasticity: 1348n, // float32 m_flElasticity; |  0x544 | Schema_Builtin | Size: 0x4
	m_flGravityScale: 1352n, // float32 m_flGravityScale; |  0x548 | Schema_Builtin | Size: 0x4
	m_flTimeScale: 1356n, // float32 m_flTimeScale; |  0x54c | Schema_Builtin | Size: 0x4
	m_bAnimatedEveryTick: 1360n, // bool m_bAnimatedEveryTick; |  0x550 | Schema_Builtin | Size: 0x1
	m_bGravityDisabled: 1361n, // bool m_bGravityDisabled; |  0x551 | Schema_Builtin | Size: 0x1
	m_flNavIgnoreUntilTime: 1364n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_hThink: 1368n, // uint16_t m_hThink; |  0x558 | Schema_Builtin | Size: 0x2
	m_fBBoxVisFlags: 1384n, // uint8_t m_fBBoxVisFlags; |  0x568 | Schema_Builtin | Size: 0x1
	m_flActualGravityScale: 1388n, // float32 m_flActualGravityScale; |  0x56c | Schema_Builtin | Size: 0x4
	m_bGravityActuallyDisabled: 1392n, // bool m_bGravityActuallyDisabled; |  0x570 | Schema_Builtin | Size: 0x1
	m_bPredictable: 1393n, // bool m_bPredictable; |  0x571 | Schema_Builtin | Size: 0x1
	m_bRenderWithViewModels: 1394n, // bool m_bRenderWithViewModels; |  0x572 | Schema_Builtin | Size: 0x1
	m_nFirstPredictableCommand: 1396n, // int32_t m_nFirstPredictableCommand; |  0x574 | Schema_Builtin | Size: 0x4
	m_nLastPredictableCommand: 1400n, // int32_t m_nLastPredictableCommand; |  0x578 | Schema_Builtin | Size: 0x4
	m_hOldMoveParent: 1404n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_Particles: 1408n, // particleslib::CParticleProperty  | Schema_DeclaredClass | Size: 0x28
	m_vecAngVelocity: 1456n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_DataChangeEventRef: 1468n, // int32_t m_DataChangeEventRef; |  0x5bc | Schema_Builtin | Size: 0x4
	m_dependencies: 1472n, // GlobalTypes::CUtlVector<GlobalTypes::CEntityHandle>  | Schema_Atomic | Size: 0x18
	m_nCreationTick: 1496n, // int32_t m_nCreationTick; |  0x5d8 | Schema_Builtin | Size: 0x4
	m_bAnimTimeChanged: 1513n, // bool m_bAnimTimeChanged; |  0x5e9 | Schema_Builtin | Size: 0x1
	m_bSimulationTimeChanged: 1514n, // bool m_bSimulationTimeChanged; |  0x5ea | Schema_Builtin | Size: 0x1
	m_sUniqueHammerID: 1528n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_nBloodType: 1536n, // client::BloodType  | Schema_DeclaredEnum | Size: 0x4
}
