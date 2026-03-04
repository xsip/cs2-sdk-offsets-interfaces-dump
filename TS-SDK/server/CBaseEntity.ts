// generated - do not edit!

import {entity2_CEntityInstance} from '../entity2/CEntityInstance';
// Class size: 0x4A8
// BaseClass: : public CS2::entity2::CEntityInstance
export const server_CBaseEntity  = {
	...entity2_CEntityInstance,
	m_CBodyComponent: 56n, // server::CBodyComponent**  | Schema_Ptr | Size: 0x8
	m_NetworkTransmitComponent: 64n, // client::CNetworkTransmitComponent  | Schema_DeclaredClass | Size: 0x1d0
	m_aThinkFunctions: 592n, // GlobalTypes::CUtlVector<client::thinkfunc_t>  | Schema_Atomic | Size: 0x18
	m_iCurrentThinkContext: 616n, // int32_t m_iCurrentThinkContext; |  0x268 | Schema_Builtin | Size: 0x4
	m_nLastThinkTick: 620n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_bDisabledContextThinks: 624n, // bool m_bDisabledContextThinks; |  0x270 | Schema_Builtin | Size: 0x1
	m_isSteadyState: 640n, // GlobalTypes::CTypedBitVec  | Schema_Atomic | Size: 0x8
	m_lastNetworkChange: 648n, // float32 m_lastNetworkChange; |  0x288 | Schema_Builtin | Size: 0x4
	m_ResponseContexts: 664n, // GlobalTypes::CUtlVector<server::ResponseContext_t>  | Schema_Atomic | Size: 0x18
	m_iszResponseContext: 688n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iHealth: 728n, // int32_t m_iHealth; |  0x2d8 | Schema_Builtin | Size: 0x4
	m_iMaxHealth: 732n, // int32_t m_iMaxHealth; |  0x2dc | Schema_Builtin | Size: 0x4
	m_lifeState: 736n, // uint8_t m_lifeState; |  0x2e0 | Schema_Builtin | Size: 0x1
	m_flDamageAccumulator: 740n, // float32 m_flDamageAccumulator; |  0x2e4 | Schema_Builtin | Size: 0x4
	m_bTakesDamage: 744n, // bool m_bTakesDamage; |  0x2e8 | Schema_Builtin | Size: 0x1
	m_nTakeDamageFlags: 752n, // client::TakeDamageFlags_t  | Schema_DeclaredEnum | Size: 0x8
	m_nPlatformType: 760n, // client::EntityPlatformTypes_t  | Schema_DeclaredEnum | Size: 0x1
	m_MoveCollide: 762n, // client::MoveCollide_t  | Schema_DeclaredEnum | Size: 0x1
	m_MoveType: 763n, // client::MoveType_t  | Schema_DeclaredEnum | Size: 0x1
	m_nActualMoveType: 764n, // client::MoveType_t  | Schema_DeclaredEnum | Size: 0x1
	m_nWaterTouch: 765n, // uint8_t m_nWaterTouch; |  0x2fd | Schema_Builtin | Size: 0x1
	m_nSlimeTouch: 766n, // uint8_t m_nSlimeTouch; |  0x2fe | Schema_Builtin | Size: 0x1
	m_bRestoreInHierarchy: 767n, // bool m_bRestoreInHierarchy; |  0x2ff | Schema_Builtin | Size: 0x1
	m_target: 768n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hDamageFilter: 776n, // GlobalTypes::CHandle<server::CBaseFilter>  | Schema_Atomic | Size: 0x4
	m_iszDamageFilterName: 784n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flMoveDoneTime: 792n, // float32 m_flMoveDoneTime; |  0x318 | Schema_Builtin | Size: 0x4
	m_nSubclassID: 796n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_flAnimTime: 808n, // float32 m_flAnimTime; |  0x328 | Schema_Builtin | Size: 0x4
	m_flSimulationTime: 812n, // float32 m_flSimulationTime; |  0x32c | Schema_Builtin | Size: 0x4
	m_flCreateTime: 816n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bClientSideRagdoll: 820n, // bool m_bClientSideRagdoll; |  0x334 | Schema_Builtin | Size: 0x1
	m_ubInterpolationFrame: 821n, // uint8_t m_ubInterpolationFrame; |  0x335 | Schema_Builtin | Size: 0x1
	m_vPrevVPhysicsUpdatePos: 824n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_iTeamNum: 836n, // uint8_t m_iTeamNum; |  0x344 | Schema_Builtin | Size: 0x1
	m_iGlobalname: 840n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iSentToClients: 848n, // int32_t m_iSentToClients; |  0x350 | Schema_Builtin | Size: 0x4
	m_flSpeed: 852n, // float32 m_flSpeed; |  0x354 | Schema_Builtin | Size: 0x4
	m_sUniqueHammerID: 856n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_spawnflags: 864n, // uint32_t m_spawnflags; |  0x360 | Schema_Builtin | Size: 0x4
	m_nNextThinkTick: 868n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_nSimulationTick: 872n, // int32_t m_nSimulationTick; |  0x368 | Schema_Builtin | Size: 0x4
	m_OnKilled: 880n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_fFlags: 904n, // uint32_t m_fFlags; |  0x388 | Schema_Builtin | Size: 0x4
	m_vecAbsVelocity: 908n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecVelocity: 920n, // client::CNetworkVelocityVector  | Schema_DeclaredClass | Size: 0x28
	m_vecBaseVelocity: 968n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nPushEnumCount: 980n, // int32_t m_nPushEnumCount; |  0x3d4 | Schema_Builtin | Size: 0x4
	m_pCollision: 984n, // server::CCollisionProperty**  | Schema_Ptr | Size: 0x8
	m_hEffectEntity: 992n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hOwnerEntity: 996n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_fEffects: 1000n, // uint32_t m_fEffects; |  0x3e8 | Schema_Builtin | Size: 0x4
	m_hGroundEntity: 1004n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_nGroundBodyIndex: 1008n, // int32_t m_nGroundBodyIndex; |  0x3f0 | Schema_Builtin | Size: 0x4
	m_flFriction: 1012n, // float32 m_flFriction; |  0x3f4 | Schema_Builtin | Size: 0x4
	m_flElasticity: 1016n, // float32 m_flElasticity; |  0x3f8 | Schema_Builtin | Size: 0x4
	m_flGravityScale: 1020n, // float32 m_flGravityScale; |  0x3fc | Schema_Builtin | Size: 0x4
	m_flTimeScale: 1024n, // float32 m_flTimeScale; |  0x400 | Schema_Builtin | Size: 0x4
	m_flWaterLevel: 1028n, // float32 m_flWaterLevel; |  0x404 | Schema_Builtin | Size: 0x4
	m_bGravityDisabled: 1032n, // bool m_bGravityDisabled; |  0x408 | Schema_Builtin | Size: 0x1
	m_bAnimatedEveryTick: 1033n, // bool m_bAnimatedEveryTick; |  0x409 | Schema_Builtin | Size: 0x1
	m_flActualGravityScale: 1036n, // float32 m_flActualGravityScale; |  0x40c | Schema_Builtin | Size: 0x4
	m_bGravityActuallyDisabled: 1040n, // bool m_bGravityActuallyDisabled; |  0x410 | Schema_Builtin | Size: 0x1
	m_bDisableLowViolence: 1041n, // bool m_bDisableLowViolence; |  0x411 | Schema_Builtin | Size: 0x1
	m_nWaterType: 1042n, // uint8_t m_nWaterType; |  0x412 | Schema_Builtin | Size: 0x1
	m_iEFlags: 1044n, // int32_t m_iEFlags; |  0x414 | Schema_Builtin | Size: 0x4
	m_OnUser1: 1048n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnUser2: 1072n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnUser3: 1096n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_OnUser4: 1120n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x18
	m_iInitialTeamNum: 1144n, // int32_t m_iInitialTeamNum; |  0x478 | Schema_Builtin | Size: 0x4
	m_flNavIgnoreUntilTime: 1148n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecAngVelocity: 1152n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_bNetworkQuantizeOriginAndAngles: 1164n, // bool m_bNetworkQuantizeOriginAndAngles; |  0x48c | Schema_Builtin | Size: 0x1
	m_bLagCompensate: 1165n, // bool m_bLagCompensate; |  0x48d | Schema_Builtin | Size: 0x1
	m_pBlocker: 1168n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_flLocalTime: 1172n, // float32 m_flLocalTime; |  0x494 | Schema_Builtin | Size: 0x4
	m_flVPhysicsUpdateLocalTime: 1176n, // float32 m_flVPhysicsUpdateLocalTime; |  0x498 | Schema_Builtin | Size: 0x4
	m_nBloodType: 1180n, // client::BloodType  | Schema_DeclaredEnum | Size: 0x4
	m_pPulseGraphInstance: 1184n, // server::CPulseGraphInstance_ServerEntity**  | Schema_Ptr | Size: 0x8
}
