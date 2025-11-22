// generated - do not edit!

// Class size: 0x390
// BaseClass: NONE
export const compositematerialslib_CompMatPropertyMutator_t  = {
	m_bEnabled: 0n, // bool m_bEnabled; |  0x0 | Schema_Builtin | Size: 0x1
	m_nMutatorCommandType: 4n, // compositematerialslib::CompMatPropertyMutatorType_t  | Schema_DeclaredEnum | Size: 0x4
	m_strInitWith_Container: 8n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strCopyProperty_InputContainerSrc: 16n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strCopyProperty_InputContainerProperty: 24n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strCopyProperty_TargetProperty: 32n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strRandomRollInputVars_SeedInputVar: 40n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_vecRandomRollInputVars_InputVarsToRoll: 48n, // GlobalTypes::CUtlVector<GlobalTypes::CUtlString>  | Schema_Atomic | Size: 0x18
	m_strCopyMatchingKeys_InputContainerSrc: 72n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strCopyKeysWithSuffix_InputContainerSrc: 80n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strCopyKeysWithSuffix_FindSuffix: 88n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strCopyKeysWithSuffix_ReplaceSuffix: 96n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_nSetValue_Value: 104n, // compositematerialslib::CompositeMaterialInputLooseVariable_t  | Schema_DeclaredClass | Size: 0x288
	m_strGenerateTexture_TargetParam: 752n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strGenerateTexture_InitialContainer: 760n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_nResolution: 768n, // int32_t m_nResolution; |  0x300 | Schema_Builtin | Size: 0x4
	m_bIsScratchTarget: 772n, // bool m_bIsScratchTarget; |  0x304 | Schema_Builtin | Size: 0x1
	m_strCompressionFormat: 776n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_bSplatDebugInfo: 784n, // bool m_bSplatDebugInfo; |  0x310 | Schema_Builtin | Size: 0x1
	m_bCaptureInRenderDoc: 785n, // bool m_bCaptureInRenderDoc; |  0x311 | Schema_Builtin | Size: 0x1
	m_vecTexGenInstructions: 792n, // GlobalTypes::CUtlVector<compositematerialslib::CompMatPropertyMutator_t>  | Schema_Atomic | Size: 0x18
	m_vecConditionalMutators: 816n, // GlobalTypes::CUtlVector<compositematerialslib::CompMatPropertyMutator_t>  | Schema_Atomic | Size: 0x18
	m_strPopInputQueue_Container: 840n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strDrawText_InputContainerSrc: 848n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_strDrawText_InputContainerProperty: 856n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_vecDrawText_Position: 864n, // GlobalTypes::Vector2D  | Schema_Atomic | Size: 0x8
	m_colDrawText_Color: 872n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_strDrawText_Font: 880n, // GlobalTypes::CUtlString  | Schema_Atomic | Size: 0x8
	m_vecConditions: 888n, // GlobalTypes::CUtlVector<compositematerialslib::CompMatMutatorCondition_t>  | Schema_Atomic | Size: 0x18
}
