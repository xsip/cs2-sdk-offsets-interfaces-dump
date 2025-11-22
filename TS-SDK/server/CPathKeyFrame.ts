// generated - do not edit!

import {server_CLogicalEntity} from './CLogicalEntity';
// Class size: 0x550
// BaseClass: : public CS2::server::CLogicalEntity
export const server_CPathKeyFrame  = {
	...server_CLogicalEntity,
	m_Origin: 1264n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_Angles: 1276n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_qAngle: 1296n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_iNextKey: 1312n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flNextTime: 1320n, // float32 m_flNextTime; |  0x528 | Schema_Builtin | Size: 0x4
	m_pNextKey: 1328n, // server::CPathKeyFrame**  | Schema_Ptr | Size: 0x8
	m_pPrevKey: 1336n, // server::CPathKeyFrame**  | Schema_Ptr | Size: 0x8
	m_flMoveSpeed: 1344n, // float32 m_flMoveSpeed; |  0x540 | Schema_Builtin | Size: 0x4
}
