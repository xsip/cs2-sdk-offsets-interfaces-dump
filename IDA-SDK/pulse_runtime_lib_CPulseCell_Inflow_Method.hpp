#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeChunkIndex_t.hpp"
#include "pulse_runtime_lib_PulseRegisterMap_t.hpp"

class pulse_runtime_lib_CPulseCell_Inflow_Method {
    void **__vftable_0;
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_512[0x3c];
    pulse_runtime_lib_PulseRuntimeChunkIndex_t m_EntryChunk;
    char pad_516[0x4];
    pulse_runtime_lib_PulseRegisterMap_t m_RegisterMap;
    PulseSymbol_t m_MethodName;
    CUtlString m_Description;
    bool m_bIsPublic;
    char pad_517[0x7];
    CPulseValueFullType m_ReturnType;
    char m_Args[0x10];
};
