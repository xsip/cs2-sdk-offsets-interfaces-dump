#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class client_ResponseFollowup {
    char* followup_concept;
    char* followup_contexts;
    float32 followup_delay;
    char* followup_target;
    char* followup_entityiotarget;
    char* followup_entityioinput;
    float32 followup_entityiodelay;
    bool bFired;
};
