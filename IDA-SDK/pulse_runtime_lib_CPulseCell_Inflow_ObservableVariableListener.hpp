#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeChunkIndex_t.hpp"
#include "pulse_runtime_lib_PulseRegisterMap_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeBlackboardReferenceIndex_t.hpp"

class pulse_runtime_lib_CPulseCell_Inflow_ObservableVariableListener {
    void **__vftable_0;
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_512[0x3c];
    pulse_runtime_lib_PulseRuntimeChunkIndex_t m_EntryChunk;
    char pad_517[0x4];
    pulse_runtime_lib_PulseRegisterMap_t m_RegisterMap;
    pulse_runtime_lib_PulseRuntimeBlackboardReferenceIndex_t m_nBlackboardReference;
    bool m_bSelfReference;
    char end_pad_519[0x5];
};
