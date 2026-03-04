// generated - do not edit!

import {server_CLogicalEntity} from './CLogicalEntity';
// Class size: 0x500
// BaseClass: : public CS2::server::CLogicalEntity
export const server_CPathKeyFrame  = {
	...server_CLogicalEntity,
	m_Origin: 1192n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_Angles: 1204n, // GlobalTypes::QAngle  | Schema_Atomic | Size: 0xc
	m_qAngle: 1216n, // GlobalTypes::Quaternion  | Schema_Atomic | Size: 0x10
	m_iNextKey: 1232n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_flNextTime: 1240n, // float32 m_flNextTime; |  0x4d8 | Schema_Builtin | Size: 0x4
	m_pNextKey: 1248n, // server::CPathKeyFrame**  | Schema_Ptr | Size: 0x8
	m_pPrevKey: 1256n, // server::CPathKeyFrame**  | Schema_Ptr | Size: 0x8
	m_flMoveSpeed: 1264n, // float32 m_flMoveSpeed; |  0x4f0 | Schema_Builtin | Size: 0x4
}
