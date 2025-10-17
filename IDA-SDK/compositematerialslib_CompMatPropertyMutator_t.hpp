#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "compositematerialslib_CompositeMaterialInputLooseVariable_t.hpp"

class compositematerialslib_CompMatPropertyMutator_t {
    bool m_bEnabled;
    char pad_2605[0x3];
    compositematerialslib_CompMatPropertyMutatorType_t m_nMutatorCommandType;
    CUtlString m_strInitWith_Container;
    CUtlString m_strCopyProperty_InputContainerSrc;
    CUtlString m_strCopyProperty_InputContainerProperty;
    CUtlString m_strCopyProperty_TargetProperty;
    CUtlString m_strRandomRollInputVars_SeedInputVar;
    char m_vecRandomRollInputVars_InputVarsToRoll[0x18];
    CUtlString m_strCopyMatchingKeys_InputContainerSrc;
    CUtlString m_strCopyKeysWithSuffix_InputContainerSrc;
    CUtlString m_strCopyKeysWithSuffix_FindSuffix;
    CUtlString m_strCopyKeysWithSuffix_ReplaceSuffix;
    compositematerialslib_CompositeMaterialInputLooseVariable_t m_nSetValue_Value;
    CUtlString m_strGenerateTexture_TargetParam;
    CUtlString m_strGenerateTexture_InitialContainer;
    int32_t m_nResolution;
    bool m_bIsScratchTarget;
    char pad_2606[0x3];
    CUtlString m_strCompressionFormat;
    bool m_bSplatDebugInfo;
    bool m_bCaptureInRenderDoc;
    char pad_2607[0x6];
    char m_vecTexGenInstructions[0x18];
    char m_vecConditionalMutators[0x18];
    CUtlString m_strPopInputQueue_Container;
    CUtlString m_strDrawText_InputContainerSrc;
    CUtlString m_strDrawText_InputContainerProperty;
    Vector2D m_vecDrawText_Position;
    Color m_colDrawText_Color;
    char pad_2608[0x4];
    CUtlString m_strDrawText_Font;
    char m_vecConditions[0x18];
};
