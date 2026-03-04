// generated - do not edit!

import {server_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0xB70
// BaseClass: : public CS2::server::CBaseAnimGraph
export const server_CRagdollProp  = {
	...server_CBaseAnimGraph,
	m_ragdoll: 2608n, // client::ragdoll_t  | Schema_DeclaredClass | Size: 0x50
	m_bStartDisabled: 2688n, // bool m_bStartDisabled; |  0xa80 | Schema_Builtin | Size: 0x1
	m_ragEnabled: 2696n, // GlobalTypes::CNetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_ragPos: 2720n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_ragAngles: 2744n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::QAngle>  | Schema_Atomic | Size: 0x18
	m_lastUpdateTickCount: 2768n, // uint32_t m_lastUpdateTickCount; |  0xad0 | Schema_Builtin | Size: 0x4
	m_allAsleep: 2772n, // bool m_allAsleep; |  0xad4 | Schema_Builtin | Size: 0x1
	m_bFirstCollisionAfterLaunch: 2773n, // bool m_bFirstCollisionAfterLaunch; |  0xad5 | Schema_Builtin | Size: 0x1
	m_hDamageEntity: 2776n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hKiller: 2780n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hPhysicsAttacker: 2784n, // GlobalTypes::CHandle<server::CBasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_flLastPhysicsInfluenceTime: 2788n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flFadeOutStartTime: 2792n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flFadeTime: 2796n, // float32 m_flFadeTime; |  0xaec | Schema_Builtin | Size: 0x4
	m_vecLastOrigin: 2800n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_flAwakeTime: 2812n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flLastOriginChangeTime: 2816n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_strOriginClassName: 2824n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_strSourceClassName: 2832n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bHasBeenPhysgunned: 2840n, // bool m_bHasBeenPhysgunned; |  0xb18 | Schema_Builtin | Size: 0x1
	m_bAllowStretch: 2841n, // bool m_bAllowStretch; |  0xb19 | Schema_Builtin | Size: 0x1
	m_flBlendWeight: 2844n, // float32 m_flBlendWeight; |  0xb1c | Schema_Builtin | Size: 0x4
	m_flDefaultFadeScale: 2848n, // float32 m_flDefaultFadeScale; |  0xb20 | Schema_Builtin | Size: 0x4
	m_ragdollMins: 2856n, // GlobalTypes::CUtlVector<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_ragdollMaxs: 2880n, // GlobalTypes::CUtlVector<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_bShouldDeleteActivationRecord: 2904n, // bool m_bShouldDeleteActivationRecord; |  0xb58 | Schema_Builtin | Size: 0x1
}
