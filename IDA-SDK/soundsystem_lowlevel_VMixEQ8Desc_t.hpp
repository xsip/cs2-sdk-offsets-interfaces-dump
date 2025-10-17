#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "soundsystem_lowlevel_VMixFilterDesc_t.hpp"

class soundsystem_lowlevel_VMixEQ8Desc_t {
    soundsystem_lowlevel_VMixFilterDesc_t m_stages[8];
};
