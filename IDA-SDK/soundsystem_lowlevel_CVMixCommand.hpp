#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_CVMixCommand {
    soundsystem_lowlevel_VMixGraphCommandID_t m_nCommand;
    uint32_t m_nParameterNameHash;
    int32_t m_nOutputSubmix;
    int32_t m_nInputSubmix0;
    int32_t m_nInputSubmix1;
    int32_t m_nProcessor;
    int32_t m_nInputValue0;
    int32_t m_nInputValue1;
};
