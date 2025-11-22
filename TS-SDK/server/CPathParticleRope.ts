// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x5D8
// BaseClass: : public CS2::server::CBaseEntity
export const server_CPathParticleRope  = {
	...server_CBaseEntity,
	m_bStartActive: 1272n, // bool m_bStartActive; |  0x4f8 | Schema_Builtin | Size: 0x1
	m_flMaxSimulationTime: 1276n, // float32 m_flMaxSimulationTime; |  0x4fc | Schema_Builtin | Size: 0x4
	m_iszEffectName: 1280n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_PathNodes_Name: 1288n, // GlobalTypes::CUtlVector<GlobalTypes::CUtlSymbolLarge>  | Schema_Atomic | Size: 0x18
	m_flParticleSpacing: 1312n, // float32 m_flParticleSpacing; |  0x520 | Schema_Builtin | Size: 0x4
	m_flSlack: 1316n, // float32 m_flSlack; |  0x524 | Schema_Builtin | Size: 0x4
	m_flRadius: 1320n, // float32 m_flRadius; |  0x528 | Schema_Builtin | Size: 0x4
	m_ColorTint: 1324n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_nEffectState: 1328n, // int32_t m_nEffectState; |  0x530 | Schema_Builtin | Size: 0x4
	m_iEffectIndex: 1336n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_PathNodes_Position: 1344n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_PathNodes_TangentIn: 1368n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_PathNodes_TangentOut: 1392n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_PathNodes_Color: 1416n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_PathNodes_PinEnabled: 1440n, // GlobalTypes::CNetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_PathNodes_RadiusScale: 1464n, // GlobalTypes::CNetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
}
