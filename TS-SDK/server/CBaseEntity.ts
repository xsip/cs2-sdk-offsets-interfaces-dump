// generated - do not edit!

import {entity2_CEntityInstance} from '../entity2/CEntityInstance';
// Class size: 0x4F0
// BaseClass: : public CS2::entity2::CEntityInstance
export const server_CBaseEntity  = {
	...entity2_CEntityInstance,
	m_CBodyComponent: 56n, // server::CBodyComponent**  | Schema_Ptr | Size: 0x8
	m_NetworkTransmitComponent: 64n, // client::CNetworkTransmitComponent  | Schema_DeclaredClass | Size: 0x1c8
	m_aThinkFunctions: 584n, // GlobalTypes::CUtlVector<client::thinkfunc_t>  | Schema_Atomic | Size: 0x18
	m_iCurrentThinkContext: 608n, // int32_t m_iCurrentThinkContext; |  0x260 | Schema_Builtin | Size: 0x4
	m_nLastThinkTick: 612n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_bDisabledContextThinks: 616n, // bool m_bDisabledContextThinks; |  0x268 | Schema_Builtin | Size: 0x1
	m_isSteadyState: 632n, // GlobalTypes::CTypedBitVec  | Schema_Atomic | Size: 0x8
	m_lastNetworkChange: 640n, // float32 m_lastNetworkChange; |  0x280 | Schema_Builtin | Size: 0x4
	m_ResponseContexts: 656n, // GlobalTypes::CUtlVector<server::ResponseContext_t>  | Schema_Atomic | Size: 0x18
	m_iszResponseContext: 680n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iHealth: 720n, // int32_t m_iHealth; |  0x2d0 | Schema_Builtin | Size: 0x4
	m_iMaxHealth: 724n, // int32_t m_iMaxHealth; |  0x2d4 | Schema_Builtin | Size: 0x4
	m_lifeState: 728n, // uint8_t m_lifeState; |  0x2d8 | Schema_Builtin | Size: 0x1
	m_flDamageAccumulator: 732n, // float32 m_flDamageAccumulator; |  0x2dc | Schema_Builtin | Size: 0x4
	m_bTakesDamage: 736n, // bool m_bTakesDamage; |  0x2e0 | Schema_Builtin | Size: 0x1
	m_nTakeDamageFlags: 744n, // client::TakeDamageFlags_t  | Schema_DeclaredEnum | Size: 0x8
	m_nPlatformType: 752n, // client::EntityPlatformTypes_t  | Schema_DeclaredEnum | Size: 0x1
	m_MoveCollide: 754n, // client::MoveCollide_t  | Schema_DeclaredEnum | Size: 0x1
	m_MoveType: 755n, // client::MoveType_t  | Schema_DeclaredEnum | Size: 0x1
	m_nActualMoveType: 756n, // client::MoveType_t  | Schema_DeclaredEnum | Size: 0x1
	m_nWaterTouch: 757n, // uint8_t m_nWaterTouch; |  0x2f5 | Schema_Builtin | Size: 0x1
	m_nSlimeTouch: 758n, // uint8_t m_nSlimeTouch; |  0x2f6 | Schema_Builtin | Size: 0x1
	m_bRestoreInHierarchy: 759n, // bool m_bRestoreInHierarchy; |  0x2f7 | Schema_Builtin | Size: 0x1
	m_target: 760n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_hDamageFilter: 768n, // GlobalTypes::CHandle<server::CBaseFilter>  | Schema_Atomic | Size: 0x4
	m_iszDamageFilterName: 776n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flMoveDoneTime: 784n, // float32 m_flMoveDoneTime; |  0x310 | Schema_Builtin | Size: 0x4
	m_nSubclassID: 788n, // GlobalTypes::CUtlStringToken  | Schema_Atomic | Size: 0x4
	m_flAnimTime: 800n, // float32 m_flAnimTime; |  0x320 | Schema_Builtin | Size: 0x4
	m_flSimulationTime: 804n, // float32 m_flSimulationTime; |  0x324 | Schema_Builtin | Size: 0x4
	m_flCreateTime: 808n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_bClientSideRagdoll: 812n, // bool m_bClientSideRagdoll; |  0x32c | Schema_Builtin | Size: 0x1
	m_ubInterpolationFrame: 813n, // uint8_t m_ubInterpolationFrame; |  0x32d | Schema_Builtin | Size: 0x1
	m_vPrevVPhysicsUpdatePos: 816n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_iTeamNum: 828n, // uint8_t m_iTeamNum; |  0x33c | Schema_Builtin | Size: 0x1
	m_iGlobalname: 832n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_iSentToClients: 840n, // int32_t m_iSentToClients; |  0x348 | Schema_Builtin | Size: 0x4
	m_flSpeed: 844n, // float32 m_flSpeed; |  0x34c | Schema_Builtin | Size: 0x4
	m_sUniqueHammerID: 848n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_spawnflags: 856n, // uint32_t m_spawnflags; |  0x358 | Schema_Builtin | Size: 0x4
	m_nNextThinkTick: 860n, // entity2::GameTick_t  | Schema_DeclaredClass | Size: 0x4
	m_nSimulationTick: 864n, // int32_t m_nSimulationTick; |  0x360 | Schema_Builtin | Size: 0x4
	m_OnKilled: 872n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_fFlags: 912n, // uint32_t m_fFlags; |  0x390 | Schema_Builtin | Size: 0x4
	m_vecAbsVelocity: 916n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vecVelocity: 928n, // client::CNetworkVelocityVector  | Schema_DeclaredClass | Size: 0x28
	m_vecBaseVelocity: 976n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_nPushEnumCount: 988n, // int32_t m_nPushEnumCount; |  0x3dc | Schema_Builtin | Size: 0x4
	m_pCollision: 992n, // server::CCollisionProperty**  | Schema_Ptr | Size: 0x8
	m_hEffectEntity: 1000n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hOwnerEntity: 1004n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_fEffects: 1008n, // uint32_t m_fEffects; |  0x3f0 | Schema_Builtin | Size: 0x4
	m_hGroundEntity: 1012n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_nGroundBodyIndex: 1016n, // int32_t m_nGroundBodyIndex; |  0x3f8 | Schema_Builtin | Size: 0x4
	m_flFriction: 1020n, // float32 m_flFriction; |  0x3fc | Schema_Builtin | Size: 0x4
	m_flElasticity: 1024n, // float32 m_flElasticity; |  0x400 | Schema_Builtin | Size: 0x4
	m_flGravityScale: 1028n, // float32 m_flGravityScale; |  0x404 | Schema_Builtin | Size: 0x4
	m_flTimeScale: 1032n, // float32 m_flTimeScale; |  0x408 | Schema_Builtin | Size: 0x4
	m_flWaterLevel: 1036n, // float32 m_flWaterLevel; |  0x40c | Schema_Builtin | Size: 0x4
	m_bGravityDisabled: 1040n, // bool m_bGravityDisabled; |  0x410 | Schema_Builtin | Size: 0x1
	m_bAnimatedEveryTick: 1041n, // bool m_bAnimatedEveryTick; |  0x411 | Schema_Builtin | Size: 0x1
	m_flActualGravityScale: 1044n, // float32 m_flActualGravityScale; |  0x414 | Schema_Builtin | Size: 0x4
	m_bGravityActuallyDisabled: 1048n, // bool m_bGravityActuallyDisabled; |  0x418 | Schema_Builtin | Size: 0x1
	m_bDisableLowViolence: 1049n, // bool m_bDisableLowViolence; |  0x419 | Schema_Builtin | Size: 0x1
	m_nWaterType: 1050n, // uint8_t m_nWaterType; |  0x41a | Schema_Builtin | Size: 0x1
	m_iEFlags: 1052n, // int32_t m_iEFlags; |  0x41c | Schema_Builtin | Size: 0x4
	m_OnUser1: 1056n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnUser2: 1096n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnUser3: 1136n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnUser4: 1176n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_iInitialTeamNum: 1216n, // int32_t m_iInitialTeamNum; |  0x4c0 | Schema_Builtin | Size: 0x4
	m_flNavIgnoreUntilTime: 1220n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecAngVelocity: 1224n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_bNetworkQuantizeOriginAndAngles: 1236n, // bool m_bNetworkQuantizeOriginAndAngles; |  0x4d4 | Schema_Builtin | Size: 0x1
	m_bLagCompensate: 1237n, // bool m_bLagCompensate; |  0x4d5 | Schema_Builtin | Size: 0x1
	m_pBlocker: 1240n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_flLocalTime: 1244n, // float32 m_flLocalTime; |  0x4dc | Schema_Builtin | Size: 0x4
	m_flVPhysicsUpdateLocalTime: 1248n, // float32 m_flVPhysicsUpdateLocalTime; |  0x4e0 | Schema_Builtin | Size: 0x4
	m_nBloodType: 1252n, // client::BloodType  | Schema_DeclaredEnum | Size: 0x4
	m_pPulseGraphInstance: 1256n, // server::CPulseGraphInstance_ServerEntity**  | Schema_Ptr | Size: 0x8
}
