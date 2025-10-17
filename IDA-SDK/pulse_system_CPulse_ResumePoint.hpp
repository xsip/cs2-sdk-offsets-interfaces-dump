#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "pulse_runtime_lib_PulseRuntimeChunkIndex_t.hpp"
#include "pulse_runtime_lib_PulseRegisterMap_t.hpp"

class pulse_system_CPulse_ResumePoint {
    PulseSymbol_t m_SourceOutflowName;
    pulse_runtime_lib_PulseRuntimeChunkIndex_t m_nDestChunk;
    int32_t m_nInstruction;
    pulse_runtime_lib_PulseRegisterMap_t m_OutflowRegisterMap;
    char pad_4197[0x48];
};
