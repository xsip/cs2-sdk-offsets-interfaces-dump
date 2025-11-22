// generated - do not edit!

import {server_CBaseAnimGraph} from './CBaseAnimGraph';
// Class size: 0xBE0
// BaseClass: : public CS2::server::CBaseAnimGraph
export const server_CRagdollProp  = {
	...server_CBaseAnimGraph,
	m_ragdoll: 2720n, // client::ragdoll_t  | Schema_DeclaredClass | Size: 0x50
	m_bStartDisabled: 2800n, // bool m_bStartDisabled; |  0xaf0 | Schema_Builtin | Size: 0x1
	m_ragEnabled: 2808n, // GlobalTypes::CNetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_ragPos: 2832n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_ragAngles: 2856n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::QAngle>  | Schema_Atomic | Size: 0x18
	m_lastUpdateTickCount: 2880n, // uint32_t m_lastUpdateTickCount; |  0xb40 | Schema_Builtin | Size: 0x4
	m_allAsleep: 2884n, // bool m_allAsleep; |  0xb44 | Schema_Builtin | Size: 0x1
	m_bFirstCollisionAfterLaunch: 2885n, // bool m_bFirstCollisionAfterLaunch; |  0xb45 | Schema_Builtin | Size: 0x1
	m_hDamageEntity: 2888n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hKiller: 2892n, // GlobalTypes::CHandle<server::CBaseEntity>  | Schema_Atomic | Size: 0x4
	m_hPhysicsAttacker: 2896n, // GlobalTypes::CHandle<server::CBasePlayerPawn>  | Schema_Atomic | Size: 0x4
	m_flLastPhysicsInfluenceTime: 2900n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flFadeOutStartTime: 2904n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flFadeTime: 2908n, // float32 m_flFadeTime; |  0xb5c | Schema_Builtin | Size: 0x4
	m_vecLastOrigin: 2912n, // GlobalTypes::VectorWS  | Schema_Atomic | Size: 0xc
	m_flAwakeTime: 2924n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_flLastOriginChangeTime: 2928n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_strOriginClassName: 2936n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_strSourceClassName: 2944n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_bHasBeenPhysgunned: 2952n, // bool m_bHasBeenPhysgunned; |  0xb88 | Schema_Builtin | Size: 0x1
	m_bAllowStretch: 2953n, // bool m_bAllowStretch; |  0xb89 | Schema_Builtin | Size: 0x1
	m_flBlendWeight: 2956n, // float32 m_flBlendWeight; |  0xb8c | Schema_Builtin | Size: 0x4
	m_flDefaultFadeScale: 2960n, // float32 m_flDefaultFadeScale; |  0xb90 | Schema_Builtin | Size: 0x4
	m_ragdollMins: 2968n, // GlobalTypes::CUtlVector<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_ragdollMaxs: 2992n, // GlobalTypes::CUtlVector<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_bShouldDeleteActivationRecord: 3016n, // bool m_bShouldDeleteActivationRecord; |  0xbc8 | Schema_Builtin | Size: 0x1
}
