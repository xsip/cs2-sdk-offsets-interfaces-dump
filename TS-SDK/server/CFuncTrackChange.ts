// generated - do not edit!

import {server_CFuncPlatRot} from './CFuncPlatRot';
// Class size: 0x8E0
// BaseClass: : public CS2::server::CFuncPlatRot
export const server_CFuncTrackChange  = {
	...server_CFuncPlatRot,
	m_trackTop: 2208n, // server::CPathTrack**  | Schema_Ptr | Size: 0x8
	m_trackBottom: 2216n, // server::CPathTrack**  | Schema_Ptr | Size: 0x8
	m_train: 2224n, // server::CFuncTrackTrain**  | Schema_Ptr | Size: 0x8
	m_trackTopName: 2232n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_trackBottomName: 2240n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_trainName: 2248n, // GlobalTypes::CUtlSymbolLarge  | Schema_Atomic | Size: 0x8
	m_code: 2256n, // server::TRAIN_CODE  | Schema_DeclaredEnum | Size: 0x4
	m_targetState: 2260n, // int32_t m_targetState; |  0x8d4 | Schema_Builtin | Size: 0x4
	m_use: 2264n, // int32_t m_use; |  0x8d8 | Schema_Builtin | Size: 0x4
}
