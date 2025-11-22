// generated - do not edit!

import {client_C_BaseEntity} from './C_BaseEntity';
// Class size: 0x670
// BaseClass: : public CS2::client::C_BaseEntity
export const client_C_PointValueRemapper  = {
	...client_C_BaseEntity,
	m_bDisabled: 1528n, // bool m_bDisabled; |  0x5f8 | Schema_Builtin | Size: 0x1
	m_bDisabledOld: 1529n, // bool m_bDisabledOld; |  0x5f9 | Schema_Builtin | Size: 0x1
	m_bUpdateOnClient: 1530n, // bool m_bUpdateOnClient; |  0x5fa | Schema_Builtin | Size: 0x1
	m_nInputType: 1532n, // client::ValueRemapperInputType_t  | Schema_DeclaredEnum | Size: 0x4
	m_hRemapLineStart: 1536n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_hRemapLineEnd: 1540n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_flMaximumChangePerSecond: 1544n, // float32 m_flMaximumChangePerSecond; |  0x608 | Schema_Builtin | Size: 0x4
	m_flDisengageDistance: 1548n, // float32 m_flDisengageDistance; |  0x60c | Schema_Builtin | Size: 0x4
	m_flEngageDistance: 1552n, // float32 m_flEngageDistance; |  0x610 | Schema_Builtin | Size: 0x4
	m_bRequiresUseKey: 1556n, // bool m_bRequiresUseKey; |  0x614 | Schema_Builtin | Size: 0x1
	m_nOutputType: 1560n, // client::ValueRemapperOutputType_t  | Schema_DeclaredEnum | Size: 0x4
	m_hOutputEntities: 1568n, // client::C_NetworkUtlVectorBase<GlobalTypes::CHandle<client::C_BaseEntity>>  | Schema_Atomic | Size: 0x18
	m_nHapticsType: 1592n, // client::ValueRemapperHapticsType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nMomentumType: 1596n, // client::ValueRemapperMomentumType_t  | Schema_DeclaredEnum | Size: 0x4
	m_flMomentumModifier: 1600n, // float32 m_flMomentumModifier; |  0x640 | Schema_Builtin | Size: 0x4
	m_flSnapValue: 1604n, // float32 m_flSnapValue; |  0x644 | Schema_Builtin | Size: 0x4
	m_flCurrentMomentum: 1608n, // float32 m_flCurrentMomentum; |  0x648 | Schema_Builtin | Size: 0x4
	m_nRatchetType: 1612n, // client::ValueRemapperRatchetType_t  | Schema_DeclaredEnum | Size: 0x4
	m_flRatchetOffset: 1616n, // float32 m_flRatchetOffset; |  0x650 | Schema_Builtin | Size: 0x4
	m_flInputOffset: 1620n, // float32 m_flInputOffset; |  0x654 | Schema_Builtin | Size: 0x4
	m_bEngaged: 1624n, // bool m_bEngaged; |  0x658 | Schema_Builtin | Size: 0x1
	m_bFirstUpdate: 1625n, // bool m_bFirstUpdate; |  0x659 | Schema_Builtin | Size: 0x1
	m_flPreviousValue: 1628n, // float32 m_flPreviousValue; |  0x65c | Schema_Builtin | Size: 0x4
	m_flPreviousUpdateTickTime: 1632n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecPreviousTestPoint: 1636n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
}
