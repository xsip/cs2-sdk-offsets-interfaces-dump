#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class pulse_runtime_lib_CPulse_DomainValue {
    pulse_runtime_lib_PulseDomainValueType_t m_nType;
    char pad_535[0x4];
    CGlobalSymbolCaseSensitive m_Value;
    CPulseValueFullType m_RequiredRuntimeType;
    char end_pad_536[0x8];
};
