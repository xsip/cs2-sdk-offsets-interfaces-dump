// generated - do not edit!

import {animgraphlib_CAnimComponentUpdater} from './CAnimComponentUpdater';
// Class size: 0xB8
// BaseClass: : public CS2::animgraphlib::CAnimComponentUpdater
export const animgraphlib_CMovementComponentUpdater  = {
	...animgraphlib_CAnimComponentUpdater,
	m_motors: 48n, // GlobalTypes::CUtlVector<GlobalTypes::CSmartPtr<animgraphlib::CAnimMotorUpdaterBase>>  | Schema_Atomic | Size: 0x18
	m_facingDamping: 72n, // animgraphlib::CAnimInputDamping  | Schema_DeclaredClass | Size: 0x18
	m_nDefaultMotorIndex: 104n, // int32_t m_nDefaultMotorIndex; |  0x68 | Schema_Builtin | Size: 0x4
	m_flDefaultRunSpeed: 108n, // float32 m_flDefaultRunSpeed; |  0x6c | Schema_Builtin | Size: 0x4
	m_bMoveVarsDisabled: 112n, // bool m_bMoveVarsDisabled; |  0x70 | Schema_Builtin | Size: 0x1
	m_bNetworkPath: 113n, // bool m_bNetworkPath; |  0x71 | Schema_Builtin | Size: 0x1
	m_bNetworkFacing: 114n, // bool m_bNetworkFacing; |  0x72 | Schema_Builtin | Size: 0x1
	m_paramHandles: 115n, // GlobalTypes::CAnimParamHandle[34]  | Schema_FixedArray | Size: 0x908
}
