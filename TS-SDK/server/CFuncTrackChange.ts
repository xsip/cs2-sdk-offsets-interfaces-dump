// generated - do not edit!

import {server_CFuncPlatRot} from './CFuncPlatRot';
// Class size: 0x838
// BaseClass: : public CS2::server::CFuncPlatRot
export const server_CFuncTrackChange  = {
	...server_CFuncPlatRot,
	m_trackTop: 2040n, // server::CPathTrack**  | Schema_Ptr | Size: 0x8
	m_trackBottom: 2048n, // server::CPathTrack**  | Schema_Ptr | Size: 0x8
	m_train: 2056n, // server::CFuncTrackTrain**  | Schema_Ptr | Size: 0x8
	m_trackTopName: 2064n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_trackBottomName: 2072n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_trainName: 2080n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_code: 2088n, // server::TRAIN_CODE  | Schema_DeclaredEnum | Size: 0x4
	m_targetState: 2092n, // int32_t m_targetState; |  0x82c | Schema_Builtin | Size: 0x4
	m_use: 2096n, // int32_t m_use; |  0x830 | Schema_Builtin | Size: 0x4
}
