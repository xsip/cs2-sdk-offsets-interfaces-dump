#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseDocNodeID_t.hpp"
#include "pulse_runtime_lib_PulseRegisterMap_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeChunkIndex_t.hpp"

class pulse_runtime_lib_CPulse_CallInfo {
    PulseSymbol_t m_PortName;
    pulse_runtime_lib_PulseDocNodeID_t m_nEditorNodeID;
    char pad_525[0x4];
    pulse_runtime_lib_PulseRegisterMap_t m_RegisterMap;
    pulse_runtime_lib_PulseDocNodeID_t m_CallMethodID;
    pulse_runtime_lib_PulseRuntimeChunkIndex_t m_nSrcChunk;
    int32_t m_nSrcInstruction;
    char end_pad_526[0x4];
};
