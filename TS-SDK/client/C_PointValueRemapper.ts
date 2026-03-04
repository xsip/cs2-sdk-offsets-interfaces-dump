// generated - do not edit!

import {client_C_BaseEntity} from './C_BaseEntity';
// Class size: 0x680
// BaseClass: : public CS2::client::C_BaseEntity
export const client_C_PointValueRemapper  = {
	...client_C_BaseEntity,
	m_bDisabled: 1544n, // bool m_bDisabled; |  0x608 | Schema_Builtin | Size: 0x1
	m_bDisabledOld: 1545n, // bool m_bDisabledOld; |  0x609 | Schema_Builtin | Size: 0x1
	m_bUpdateOnClient: 1546n, // bool m_bUpdateOnClient; |  0x60a | Schema_Builtin | Size: 0x1
	m_nInputType: 1548n, // client::ValueRemapperInputType_t  | Schema_DeclaredEnum | Size: 0x4
	m_hRemapLineStart: 1552n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_hRemapLineEnd: 1556n, // GlobalTypes::CHandle<client::C_BaseEntity>  | Schema_Atomic | Size: 0x4
	m_flMaximumChangePerSecond: 1560n, // float32 m_flMaximumChangePerSecond; |  0x618 | Schema_Builtin | Size: 0x4
	m_flDisengageDistance: 1564n, // float32 m_flDisengageDistance; |  0x61c | Schema_Builtin | Size: 0x4
	m_flEngageDistance: 1568n, // float32 m_flEngageDistance; |  0x620 | Schema_Builtin | Size: 0x4
	m_bRequiresUseKey: 1572n, // bool m_bRequiresUseKey; |  0x624 | Schema_Builtin | Size: 0x1
	m_nOutputType: 1576n, // client::ValueRemapperOutputType_t  | Schema_DeclaredEnum | Size: 0x4
	m_hOutputEntities: 1584n, // client::C_NetworkUtlVectorBase<GlobalTypes::CHandle<client::C_BaseEntity>>  | Schema_Atomic | Size: 0x18
	m_nHapticsType: 1608n, // client::ValueRemapperHapticsType_t  | Schema_DeclaredEnum | Size: 0x4
	m_nMomentumType: 1612n, // client::ValueRemapperMomentumType_t  | Schema_DeclaredEnum | Size: 0x4
	m_flMomentumModifier: 1616n, // float32 m_flMomentumModifier; |  0x650 | Schema_Builtin | Size: 0x4
	m_flSnapValue: 1620n, // float32 m_flSnapValue; |  0x654 | Schema_Builtin | Size: 0x4
	m_flCurrentMomentum: 1624n, // float32 m_flCurrentMomentum; |  0x658 | Schema_Builtin | Size: 0x4
	m_nRatchetType: 1628n, // client::ValueRemapperRatchetType_t  | Schema_DeclaredEnum | Size: 0x4
	m_flRatchetOffset: 1632n, // float32 m_flRatchetOffset; |  0x660 | Schema_Builtin | Size: 0x4
	m_flInputOffset: 1636n, // float32 m_flInputOffset; |  0x664 | Schema_Builtin | Size: 0x4
	m_bEngaged: 1640n, // bool m_bEngaged; |  0x668 | Schema_Builtin | Size: 0x1
	m_bFirstUpdate: 1641n, // bool m_bFirstUpdate; |  0x669 | Schema_Builtin | Size: 0x1
	m_flPreviousValue: 1644n, // float32 m_flPreviousValue; |  0x66c | Schema_Builtin | Size: 0x4
	m_flPreviousUpdateTickTime: 1648n, // entity2::GameTime_t  | Schema_DeclaredClass | Size: 0x4
	m_vecPreviousTestPoint: 1652n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
}
