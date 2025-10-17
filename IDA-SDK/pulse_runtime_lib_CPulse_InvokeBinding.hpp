#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseRegisterMap_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeCellIndex_t.hpp"
#include "pulse_runtime_lib_PulseRuntimeChunkIndex_t.hpp"

class pulse_runtime_lib_CPulse_InvokeBinding {
    pulse_runtime_lib_PulseRegisterMap_t m_RegisterMap;
    PulseSymbol_t m_FuncName;
    pulse_runtime_lib_PulseRuntimeCellIndex_t m_nCellIndex;
    pulse_runtime_lib_PulseRuntimeChunkIndex_t m_nSrcChunk;
    int32_t m_nSrcInstruction;
    char end_pad_527[0x64];
};
