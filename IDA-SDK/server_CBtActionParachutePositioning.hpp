#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "server_CountdownTimer.hpp"

class server_CBtActionParachutePositioning {
    char pad_2721[0x58];
    server_CountdownTimer m_ActionTimer;
    char end_pad_3166[0x8];
};
