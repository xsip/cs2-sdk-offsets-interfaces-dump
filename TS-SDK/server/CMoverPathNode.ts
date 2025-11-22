// generated - do not edit!

import {server_CPointEntity} from './CPointEntity';
// Class size: 0x610
// BaseClass: : public CS2::server::CPointEntity
export const server_CMoverPathNode  = {
	...server_CPointEntity,
	m_vInTangentLocal: 1264n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_vOutTangentLocal: 1276n, // GlobalTypes::Vector  | Schema_Atomic | Size: 0xc
	m_szParentPathUniqueID: 1288n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_szPathNodeParameter: 1296n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_OnStartFromOrInSegment: 1304n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnStoppedAtOrInSegment: 1344n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnPassThrough: 1384n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnPassThroughForward: 1424n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_OnPassThroughReverse: 1464n, // entity2::CEntityIOOutput  | Schema_DeclaredClass | Size: 0x28
	m_hMover: 1504n, // GlobalTypes::CHandle<server::CPathMover>  | Schema_Atomic | Size: 0x4
	m_xWSPrevParent: 1520n, // GlobalTypes::CTransform  | Schema_Atomic | Size: 0x20
}
