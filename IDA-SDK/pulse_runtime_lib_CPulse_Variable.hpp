#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"

class pulse_runtime_lib_CPulse_Variable {
    PulseSymbol_t m_Name;
    CUtlString m_Description;
    CPulseValueFullType m_Type;
    KeyValues3 m_DefaultValue;
    char pad_538[0x4];
    pulse_runtime_lib_PulseVariableKeysSource_t m_nKeysSource;
    bool m_bIsPublicBlackboardVariable;
    bool m_bIsObservable;
    char pad_539[0x2];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
};
