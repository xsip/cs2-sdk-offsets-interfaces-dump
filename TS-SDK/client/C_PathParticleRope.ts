// generated - do not edit!

import {client_C_BaseEntity} from './C_BaseEntity';
// Class size: 0x708
// BaseClass: : public CS2::client::C_BaseEntity
export const client_C_PathParticleRope  = {
	...client_C_BaseEntity,
	m_bStartActive: 1536n, // bool m_bStartActive; |  0x600 | Schema_Builtin | Size: 0x1
	m_flMaxSimulationTime: 1540n, // float32 m_flMaxSimulationTime; |  0x604 | Schema_Builtin | Size: 0x4
	m_iszEffectName: 1544n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_PathNodes_Name: 1552n, // GlobalTypes::CUtlVector<GlobalTypes::CUtlSymbolLarge>  | Schema_Atomic | Size: 0x18
	m_flParticleSpacing: 1576n, // float32 m_flParticleSpacing; |  0x628 | Schema_Builtin | Size: 0x4
	m_flSlack: 1580n, // float32 m_flSlack; |  0x62c | Schema_Builtin | Size: 0x4
	m_flRadius: 1584n, // float32 m_flRadius; |  0x630 | Schema_Builtin | Size: 0x4
	m_ColorTint: 1588n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_nEffectState: 1592n, // int32_t m_nEffectState; |  0x638 | Schema_Builtin | Size: 0x4
	m_iEffectIndex: 1600n, // GlobalTypes::CStrongHandle<resourcesystem::InfoForResourceTypeIParticleSystemDefinition>  | Schema_Atomic | Size: 0x8
	m_PathNodes_Position: 1608n, // GlobalTypes::C_NetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_PathNodes_TangentIn: 1632n, // GlobalTypes::C_NetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_PathNodes_TangentOut: 1656n, // GlobalTypes::C_NetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_PathNodes_Color: 1680n, // GlobalTypes::C_NetworkUtlVectorBase<GlobalTypes::Vector>  | Schema_Atomic | Size: 0x18
	m_PathNodes_PinEnabled: 1704n, // GlobalTypes::C_NetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
	m_PathNodes_RadiusScale: 1728n, // GlobalTypes::C_NetworkUtlVectorBase  | Schema_Atomic | Size: 0x18
}
