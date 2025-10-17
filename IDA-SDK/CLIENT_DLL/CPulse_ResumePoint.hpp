#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "PulseRuntimeChunkIndex_t.hpp"
#include "PulseRegisterMap_t.hpp"

class CPulse_ResumePoint {
    PulseSymbol_t m_SourceOutflowName;
    PulseRuntimeChunkIndex_t m_nDestChunk;
    int32_t m_nInstruction;
    PulseRegisterMap_t m_OutflowRegisterMap;
};
