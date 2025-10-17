#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class pulse_runtime_lib_CPulse_OutputConnection {
    PulseSymbol_t m_SourceOutput;
    PulseSymbol_t m_TargetEntity;
    PulseSymbol_t m_TargetInput;
    PulseSymbol_t m_Param;
};
