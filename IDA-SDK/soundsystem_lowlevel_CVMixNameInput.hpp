#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_CVMixNameInput {
    CUtlString m_name;
    char end_pad_625[0x8];
    CUtlString m_defaultValue;
    char end_pad_644[0x8];
};
