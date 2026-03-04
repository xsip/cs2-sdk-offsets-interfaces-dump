// generated - do not edit!

import {server_CBaseEntity} from './CBaseEntity';
// Class size: 0x590
// BaseClass: : public CS2::server::CBaseEntity
export const server_CPathParticleRope  = {
	...server_CBaseEntity,
	m_bStartActive: 1200n, // bool m_bStartActive; |  0x4b0 | Schema_Builtin | Size: 0x1
	m_flMaxSimulationTime: 1204n, // float32 m_flMaxSimulationTime; |  0x4b4 | Schema_Builtin | Size: 0x4
	m_iszEffectName: 1208n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_PathNodes_Name: 1216n, // GlobalTypes::CUtlVector<GlobalTypes::CUtlSymbolLarge>  | Schema_Atomic | Size: 0x18
	m_flParticleSpacing: 1240n, // float32 m_flParticleSpacing; |  0x4d8 | Schema_Builtin | Size: 0x4
	m_flSlack: 1244n, // float32 m_flSlack; |  0x4dc | Schema_Builtin | Size: 0x4
	m_flRadius: 1248n, // float32 m_flRadius; |  0x4e0 | Schema_Builtin | Size: 0x4
	m_ColorTint: 1252n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_nEffectState: 1256n, // int32_t m_nEffectState; |  0x4e8 | Schema_Builtin | Size: 0x4
	m_iEffectIndex: 1264n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_PathNodes_Position: 1272n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_PathNodes_TangentIn: 1296n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_PathNodes_TangentOut: 1320n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_PathNodes_Color: 1344n, // GlobalTypes::CNetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_PathNodes_PinEnabled: 1368n, // GlobalTypes::CNetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_PathNodes_RadiusScale: 1392n, // GlobalTypes::CNetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
}
