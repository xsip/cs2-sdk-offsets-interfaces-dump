// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x500
// BaseClass: : public CS2::server::CPointEntity
export const server_CPathNode  = {
	...server_CPointEntity,
	m_vInTangentLocal: 1192n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vOutTangentLocal: 1204n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_strParentPathUniqueID: 1216n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strPathNodeParameter: 1224n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_xWSPrevParent: 1232n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
	m_hPath: 1264n, // GlobalTypes::CHandle<server::CPathWithDynamicNodes>  | Schema_Atomic | Size: 0x4
}
