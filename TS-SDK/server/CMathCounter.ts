// generated - do not edit!

import {server_CLogicalEntity} from './CLogicalEntity';
// Class size: 0x5F0
// BaseClass: : public CS2::server::CLogicalEntity
export const server_CMathCounter  = {
	...server_CLogicalEntity,
	m_flMin: 1264n, // float32 m_flMin; |  0x4f0 | Schema_Builtin | Size: 0x4
	m_flMax: 1268n, // float32 m_flMax; |  0x4f4 | Schema_Builtin | Size: 0x4
	m_bHitMin: 1272n, // bool m_bHitMin; |  0x4f8 | Schema_Builtin | Size: 0x1
	m_bHitMax: 1273n, // bool m_bHitMax; |  0x4f9 | Schema_Builtin | Size: 0x1
	m_bDisabled: 1274n, // bool m_bDisabled; |  0x4fa | Schema_Builtin | Size: 0x1
	m_OutValue: 1280n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
	m_OnGetValue: 1320n, // GlobalTypes::CEntityOutputTemplate  | Schema_Atomic | Size: 0x28
	m_OnHitMin: 1360n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnHitMax: 1400n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnChangedFromMin: 1440n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnChangedFromMax: 1480n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
}
