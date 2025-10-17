#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeChunkIndex_t.hpp"
#include "pulse_runtime_lib_PulseRegisterMap_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeBlackboardReferenceIndex_t.hpp"

class pulse_runtime_lib_CPulseCell_Inflow_ObservableVariableListener {
    char vTable501[0x8];
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char end_pad_502[0x3c];
    pulse_runtime_lib_PulseRuntimeChunkIndex_t m_EntryChunk;
    char pad_506[0x4];
    pulse_runtime_lib_PulseRegisterMap_t m_RegisterMap;
    pulse_runtime_lib_PulseRuntimeBlackboardReferenceIndex_t m_nBlackboardReference;
    bool m_bSelfReference;
    char end_pad_508[0x5];
};
