// generated - do not edit!

// Class size: 0x70
// BaseClass: NONE
export const soundsystem_CSosSoundEventGroupSchema  = {
	m_nGroupType: 8n, // soundsystem::SosGroupType_t  | Schema_DeclaredEnum | Size: 0x4
	m_bBlocksEvents: 12n, // bool m_bBlocksEvents; |  0xc | Schema_Builtin | Size: 0x1
	m_nBlockMaxCount: 16n, // int32_t m_nBlockMaxCount; |  0x10 | Schema_Builtin | Size: 0x4
	m_flMemberLifespanTime: 20n, // float32 m_flMemberLifespanTime; |  0x14 | Schema_Builtin | Size: 0x4
	m_bInvertMatch: 24n, // bool m_bInvertMatch; |  0x18 | Schema_Builtin | Size: 0x1
	m_Behavior_EventName: 28n, // soundsystem::SosGroupFieldBehavior_t  | Schema_DeclaredEnum | Size: 0x4
	m_matchSoundEventName: 32n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_bMatchEventSubString: 40n, // bool m_bMatchEventSubString; |  0x28 | Schema_Builtin | Size: 0x1
	m_matchSoundEventSubString: 48n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_Behavior_EntIndex: 56n, // soundsystem::SosGroupFieldBehavior_t  | Schema_DeclaredEnum | Size: 0x4
	m_flEntIndex: 60n, // float32 m_flEntIndex; |  0x3c | Schema_Builtin | Size: 0x4
	m_Behavior_Opvar: 64n, // soundsystem::SosGroupFieldBehavior_t  | Schema_DeclaredEnum | Size: 0x4
	m_flOpvar: 68n, // float32 m_flOpvar; |  0x44 | Schema_Builtin | Size: 0x4
	m_Behavior_String: 72n, // soundsystem::SosGroupFieldBehavior_t  | Schema_DeclaredEnum | Size: 0x4
	m_opvarString: 80n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_vActions: 88n, // GlobalTypes::CUtlVector<soundsystem::CSosGroupActionSchema*>  | Schema_Atomic | Size: 0x18
}
